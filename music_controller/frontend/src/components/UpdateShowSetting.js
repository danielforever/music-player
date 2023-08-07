import React from "react";
import { Grid, Button} from "@mui/material";
import { useState, useEffect } from "react";

const updateShowSettings = ({updatastate}) => {

    return (
            <Grid item xs={12} align="center">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={ () => updatastate.hereshowSettingBoard(!updatastate.heresetroomCode)}
                >
                    Settings
                </Button>
            </Grid>)
    }

export default updateShowSettings