import React, { Component } from 'react';
import './Rooms.css';

function list_queue(room) {
  let q = [];
  for (let i = 0; i < room.queue.length; i++){
    q.push(<li key={room.room_code}> {room.queue[i]} </li>);
  }
  return q;
}

function list_members(room) {
  let q = [];
  for (let i = 0; i < room.members.length; i++){
    q.push(<li key={room.room_code}> {room.members[i]} </li>);
  }
  return q;
}

class Room extends Component {
  constructor() {
    super();
    this.state = {
      rooms: []
    }
  }

  componentDidMount() {
    fetch('/api/Rooms')
    .then(res => res.json())
    .then(rooms => this.setState({rooms}, () => console.log("Loaded Active Rooms ", rooms)))
  }



  render() {
    return (
      <div>
        {this.state.rooms.map( room =>
            <h2> Room {room.room_code}</h2>
        )}
        <h3> Members </h3>
        <ul>
          {this.state.rooms.map(room =>
              list_members(room)
          )}
        </ul>
        <h3> Queue </h3>
        <ul>
          {this.state.rooms.map(room =>
              list_queue(room)
          )}
        </ul>
      </div>
    );
  }
}


export default Room;
