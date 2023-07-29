/* import React, { Component } from "react";
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel  } from "@mui/material";
import { Link } from "react-router-dom";

export default class CreateRoomPage extends Component {
  defaultVotes = 2;
  constructor(props) {
    super(props);
    this.state = {
      guestCanPause: true,
      votesToSkip: this.defaultVotes,
    };

    this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
    this.handleVotesChange = this.handleVotesChange.bind(this);
    this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
  };

  handleVotesChange(e) {
    this.setState({
      votesToSkip: e.target.value,
    });
  }

  handleGuestCanPauseChange(e) {
    this.setState({
      guestCanPause: e.target.value === "true" ? true : false,
    });
  }

  handleRoomButtonPressed() {
    console.log("actived post request!");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: this.state.votesToSkip,
        guest_can_pause: this.state.guestCanPause,
      }),
    };
    fetch("/api/create-room", requestOptions)
      .then((response) => response.json())
      .then((data) => this.props.history.push("/room/" + data.code));
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            Create A Room
          </Typography>
        </ Grid>
        <Grid item xs={12} align="center">
        <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">Guest Control of Playback State</div>
            </FormHelperText>
            <RadioGroup
              row
              defaultValue="true"
              onChange={this.handleGuestCanPauseChange}
            >
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="No Control"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </ Grid>
        <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required={true}
              type="number"
              onChange={this.handleVotesChange}
              defaultValue={this.defaultVotes}
              inputProps={{
                min: 1,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">Votes Required To Skip Song</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleRoomButtonPressed}
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
} */


import React, { Component, useState} from "react";
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
