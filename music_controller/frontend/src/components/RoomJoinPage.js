import React,{ useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Button, Grid, Typography } from "@mui/material";


const RoomJoinPage = () => {
  const handleTextFieldChange = e => setroomCode(e.target.value)
  const error = '';

  const [roomCode, setroomCode] = useState("");
  const navigate = useNavigate();

  const roomButtonPressed = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: roomCode,
      }),
    };
    fetch("/api/join-room", requestOptions)
      .then((response) => {
        if (response.ok) {
          navigate('/room/' + roomCode);
        } else {
          error = "Room not found.";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }



    return (
      <form onSubmit={roomButtonPressed}>
        <Grid container spacing={1}>
          <Grid item xs={12} align="center">
            <Typography variant="h4" component="h4">
              Join a Room
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <input
              error={error}
              label="Code"
              placeholder="Enter a Room Code"
              value={roomCode}
              type="text"
              variant="outlined"
              onChange={handleTextFieldChange}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              variant="contained"
              type="submit"
              color="primary"
            >
              Enter Room
            </Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Button variant="contained" color="secondary" to="/" component={Link}>
              Back
            </Button>
          </Grid>
        </Grid>
      </form>
    )
    
  }

export default RoomJoinPage