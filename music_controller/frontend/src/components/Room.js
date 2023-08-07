import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Button, Typography} from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';
import UpdateShowSettings from "./UpdateShowSetting";


const Room = ({state}) => {
  


  const [setroomCode, showSettingBoard] = useState(false);
  const [votesToSkip, setvotesToSkip] = useState(2);
  const [guestCanPause, setguestCanPause] = useState(false);  
  const [isHost , setisHost] = useState(false);
/*   const [showSettings, updateShowSettings] = useState(false); */
  const navigate = useNavigate();

  const updatastate = {
    heresetroomCode: setroomCode,
    hereshowSettingBoard: showSettingBoard
  }

  let { roomCode } = useParams();

  useEffect(() => {
    getRoomDetails()
  })


  const getRoomDetails = async (e) => {
      /* e.preventDefault(); */
    fetch("/api/get-room" + "?code=" + roomCode)
      .then((response) => {
        if (!response.ok) {
          console.log("check here");
          navigate('/');
        }
        return response.json();
        })
        
      .then((data) => {
        setvotesToSkip(data.votes_to_skip)
        setguestCanPause(data.guest_can_pause)
        setisHost(data.is_host)
      });
    }

  const leaveButtonPressed = async (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/api/leave-room", requestOptions).then((_response) => {
      state.passroomCode = null;
      navigate('/');
    });
  }

  return (
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} align="center">
              <Typography variant="h4" component="h4">
                Code: {roomCode}
              </Typography>
            </Grid>
            <Grid item xs={12} align="center">
              <Typography variant="h6" component="h6">
                Votes: {votesToSkip}
              </Typography>
            </Grid>
            <Grid item xs={12} align="center">
              <Typography variant="h6" component="h6">
                Guest Can Pause: {guestCanPause.toString()}
              </Typography>
            </Grid>
            <Grid item xs={12} align="center">
              <Typography variant="h6" component="h6">
                Host: {isHost.toString()}
              </Typography>
            </Grid>
            {isHost ? <UpdateShowSettings updatastate={updatastate}/> : null }
            <Grid item xs={12} align="center">
              <Button
                variant="contained"
                color="secondary"
                onClick={leaveButtonPressed}
              >
                Leave Room
              </Button>
            </Grid>
          </Grid>
        </div>)

}

export default Room