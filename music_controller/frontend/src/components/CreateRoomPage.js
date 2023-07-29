import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel  } from "@mui/material";
import { Link } from "react-router-dom";
import Switch from '@mui/material/Switch';

const CreateRoomPage = () => {

    const [guestCanPause, setguestCanPause] = useState(false);
    const [votesToSkip, setvotesToSkip] = useState("2");

    const navigate = useNavigate();

    const onvotesToSkipChanged = e => setvotesToSkip(e.target.value)
    const onguestCanPauseChanged = e => setguestCanPause(e.target.value)

    const handleRoomButtonPressed = async (e) => {
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
              <h3 align="center">Guest Control of Playback State</h3>
              <input type="checkbox" onChange={() => {setguestCanPause(!guestCanPause) }}/>
        </ Grid>
        <Grid item xs={12} align="center">
            <FormHelperText>
              <div align="center">Votes Required To Skip Song</div>
            </FormHelperText>
            <input
              required={true}
              type="text"
              onChange={onvotesToSkipChanged}
              defaultValue={2}
            />

        </Grid>
        <Grid item xs={12} align="center">
          <Button
            type="submit"
            color="primary"
            variant="contained"
          >
            Create A Room
          </Button>
        </Grid>
        </form>

        <Grid item xs={12} align="center">
          <Button color="secondary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </ Grid>       
    )
}

export default CreateRoomPage
