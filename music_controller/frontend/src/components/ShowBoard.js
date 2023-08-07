import React from "react";

const ShowBoard = () => {

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
            <CreateRoomPage
                update={true}
                votesToSkip={this.state.votesToSkip}
                guestCanPause={this.state.guestCanPause}
                roomCode={this.roomCode}
                updateCallback={this.getRoomDetails}
            />
            </Grid>
            <Grid item xs={12} align="center">
            <Button
                variant="contained"
                color="secondary"
                onClick={() => this.updateShowSettings(false)}
            >
                Close
            </Button>
            </Grid>
        </Grid>        
    );

}

export default ShowBoard