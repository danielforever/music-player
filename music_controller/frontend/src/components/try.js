import React, { Component, useState, Navigate} from "react";
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel  } from "@mui/material";
import { Link } from "react-router-dom";

const CreateRoomPage = () => {


    const [guestCanPause, setguestCanPause] = useState(true);
    const [votesToSkip, setvotesToSkip] = useState(2);

    const navigate = useNavigate();

    const onvotesToSkipChanged = e => setvotesToSkip(e.target.value)
    const onguestCanPauseChanged = e => setguestCanPause(e.target.value)

    const handleRoomButtonPressed = () => {
      /* console.log("actived post request!"); */
      e.preventDefault();
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          votes_to_skip: votesToSkip,
          guest_can_pause: guestCanPause,
        }),
      };
      fetch("/api/create-room", requestOptions)
        .then((response) => response.json())
        .then((data) => navigate('/room/' + data.code));
    }
    

    return (
       <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            Create A Room
          </Typography>
        </ Grid>
        <form onSubmit={handleRoomButtonPressed}>
        <Grid item xs={12} align="center">  
            <FormHelperText>
              <div align="center">Guest Control of Playback State</div>
            </FormHelperText>
            <RadioGroup
              row
              defaultValue="true"
            >
              <input
                value="true"
                type="radio"
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
                onChange={onguestCanPauseChanged}
              />
              <input
                value="false"
                type="radio"
                control={<Radio color="secondary" />}
                label="No Control"
                labelPlacement="bottom"
                onChange={onguestCanPauseChanged}
              />
            </RadioGroup>
        </ Grid>
        <Grid item xs={12} align="center">
            <input
              required={true}
              type="number"
              onChange={onvotesToSkipChanged}
              defaultValue={this.defaultVotes}
              value="votesToSkip"
              inputProps={{
                min: 1,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">Votes Required To Skip Song</div>
            </FormHelperText>
        </Grid>
        </form>
        <Grid item xs={12} align="center">
          <Button
          type="submit"
            color="primary"
            variant="contained"
          >
            Create A Room
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </ Grid>       
    )
}

export default CreateRoomPage
