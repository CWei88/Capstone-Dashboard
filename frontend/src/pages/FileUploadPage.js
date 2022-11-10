import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";

// Child Components
import FileUpload from '../components/FileUpload';

function FileUploadPage() {
    return (
        <div style={{ backgroundColor: "#0F172A", height: "100vh" }}>

        <Box
            sx={{
            width: "100%",
            backgroundColor: "white",
            padding: "20px",
            margin: "10px",
            borderRadius: "10px",
            }}
        >

        <Grid container>
            <Grid item>
                <FileUpload />
            </Grid>
        </Grid>

        </Box>
        </div>
    );
}

export default FileUploadPage;