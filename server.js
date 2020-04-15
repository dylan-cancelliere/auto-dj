const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;
let request = require('request');
let cors = require('cors');
let querystring = require('querystring');
let cookieParser = require('cookie-parser');

let client_id = '07da490b78784cab8be4aa1815137b12'; // Your client id
let client_secret = 'fb522c9e6e2444b49c3e6e2eba525258'; // Your secret
let redirect_uri = 'http://localhost:5000/callback'; // Your redirect uri

const ADDRESS = "http://localhost:3000/#/lobby?"

let generateRandomString = function(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

let stateKey = 'spotify_auth_state';
app.use(express.static(__dirname + '/public')).use(cors()).use(cookieParser());

app.get('/search/song/:song/auth/:auth', function(req, res) {
    let access_token = req.params['auth'];
    console.log(access_token);

    let options = {
        url: 'https://api.spotify.com/v1/search?' +
        querystring.stringify({
            q: req.params['song']
        }) + "&type=track",
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
    };

    console.log(options['url']);

    request.get(options, function(error, response, body) {
        res.json(body);
        console.log(body);
        //res.redirect(ADDRESS);
    });
})

app.get('/login', function(req,res){
    let state = generateRandomString(16);
    res.cookie(stateKey, state);

    //Request auth
    let scope = 'user-read-private user-read-email streaming user-read-playback-state user-modify-playback-state user-library-read user-library-modify';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
});

app.get('/callback', function(req, res) {

    // Requests refresh and access tokens after checking the state parameter

    let code = req.query.code || null;
    let state = req.query.state || null;
    let storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect(ADDRESS +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        let authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {

                let access_token = body.access_token,
                    refresh_token = body.refresh_token;

                let options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true
                };

                // use the access token to access the Spotify Web API
                request.get(options, function(error, response, body) {
                    //console.log(body);
                });

                // we can also pass the token to the browser to make requests from there
                res.redirect(ADDRESS +
                    querystring.stringify({
                        access_token: access_token,
                        refresh_token: refresh_token
                    }));
            } else {
                res.redirect(ADDRESS +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }
        });
    }
});

app.get('/refresh_token', function(req, res) {

    // requesting access token from refresh token
    let refresh_token = req.query.refresh_token;
    let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            let access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });
});

function query_room(room_no) {
    MongoClient.connect("mongodb://localhost:27017/auto-dj", function (err, db) {

        db.collection('active_rooms', function (err, collection) {

            collection.find({room_code: room_no}).toArray(function(err, items) {
                if(err) throw err;
                console.log(items);
            });
        });
    });
}


app.get('/api/Rooms', (req, res) => {
    const room = [
        { members: ["Joe", "Dylan"], room_code: 123456, queue: ["No Snitchin'", "12 bricks", "Joe mama"]},
        // { members: ["Sam", "Justin"], room_code: 654321, queue: ["The Box", "Ric Flair Drip"]

    ];

    // const room = query_room('000000');
    console.log(room);
    res.json(room);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
