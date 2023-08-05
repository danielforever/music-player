import React from "react";
import { Grid, Button, ButtonGroup, Typography } from "@mui/material";

import {
Link
} from "react-router-dom";

const HomePage = () => {

/*   const [roomCode, setroomCode] = useState(""); */

/* const componentDidMount = async (e) => {
  e.preventDefault();
  fetch("/api/user-in-room")
  .then((response) => response.json())
  .then((data) => {
    this.setState({
      roomCode: data.code,
    });
  });

} */


  return (
  <Grid container spacing={3}>
    <Grid item xs={12} align="center">
      <Typography variant="h3" compact="h3">
        House Party
      </Typography>
    </Grid>
    <Grid item xs={12} align="center">
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button color="primary" to="/join" component={Link}>
          Join a Room
        </Button>
        <Button color="secondary" to="/create" component={Link}>
          Create a Room
        </Button>
      </ButtonGroup>
    </Grid>
  </Grid>
  )
}

export default HomePage