const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;


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


app.get('/api/rooms', (req, res) => {
    const room = [
        { members: ["Joe", "Dylan"], room_code: 123456, queue: ["No Snitchin'", "12 bricks"]},
        // { members: ["Sam", "Justin"], room_code: 654321, queue: ["The Box", "Ric Flair Drip"]

    ];

    // const room = query_room('000000');
    console.log(room);
    res.json(room);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
