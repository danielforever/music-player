import React from "react";
import { Grid, Button} from "@mui/material";
import CreateRoomPage from "./CreateRoomPage";

const ShowBoard = ({stateboard}) => {

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
            <CreateRoomPage
                update={true}
                votesToSkip={stateboard.boardvotesToSkip}
                guestCanPause={stateboard.boardguestCanPause}
                roomCode={stateboard.boardroomCode}
                updateCallback={stateboard.boardgetRoomDetails}
            />
            </Grid>
            <Grid item xs={12} align="center">
            <Button
                variant="contained"
                color="secondary"
                onClick={ () => stateboard.boardshowSettingBoard(!stateboard.boardsetroomCode)}
            >
                Close
            </Button>
            </Grid>
        </Grid>        
    );

}

export default ShowBoard