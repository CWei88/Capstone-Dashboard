import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CompanyHeader from '../components/CompanyHeader';
import DownloadDoneSharpIcon from '@mui/icons-material/DownloadDoneSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

// Child Components

export default function Report({Report}) {
    console.log("Individual Report:" + Report.year)
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
                        <CompanyHeader companyName={Report.companyName}/>
                    </Grid>
                </Grid>
                
            </Box>

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
                    
                </Grid>
            </Box>
        </div>
    );
}
