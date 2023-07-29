import React, { Component } from "react";
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";



const Room = () => {

  const [votesToSkip, setvotesToSkip] = useState(2);
  const [guestCanPause, setguestCanPause] = useState(false);  
  const [isHost , setisHost] = useState(false);  

  let { roomCode } = useParams();

  useEffect(() => {
    getRoomDetails()
  })

  const getRoomDetails = () => {
      fetch("/api/get-room" + "?code=" + roomCode)
        .then((response) => response.json())
        .then((data) => {
          setvotesToSkip(data.votes_to_skip)
          setguestCanPause(data.guest_can_pause)
          setisHost(data.is_host)
        });
    }

  return (
        <div>
          <p>what cant you show this string?</p>
            <h3>{roomCode}</h3>
            <p>Votes: {votesToSkip}</p>
            <p>Guest Can Pause: {guestCanPause.toString()}</p>
            <p>Host: {isHost.toString()}</p>
        </div>)

}

export default Room