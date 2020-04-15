import React, {Component} from "react";
import "./WebPlayer.css";
import SpotifyPlayer from 'react-spotify-web-playback';

const tempAuthToken = 'BQCepsNdej0RM5AlKBtF8UnmOei4Fti7cfQpA8TGRQImfdfKev-_OWLc6Xx42JYwg3wGv-KPNoKSMk1YG4Zp5Wowey_KKv9ecDRxYya0oZoObM6LwzWSwz03Isd-t3Wqb7xs_gwL4jS63qOeoaKF3jzLCFC-9whDZiTPVFtr_mO-5EHwrcfnAjRA4xie_Q&refresh_token=AQDH-DzHJWWSg9uj8RON483kki53wvph7KJmfxkOhOs54AGzbIk3BnySbYaIaeNzZga6vFz7h7YFmBY6RrAz2YldeMDLsVc2gKC8ASMkaAZq0W9tIbiVIAAG5vSAEyvt7hI';

class WebPlayer extends Component{
    render(){
        return(
            <div className="web-player">
                <SpotifyPlayer token={tempAuthToken}
                               autoPlay="true"
                               name="AutoDJ"
                               styles={{
                                   bgColor: '#00072d'
                               }}
                />
            </div>
        )
    }
}

export default WebPlayer
