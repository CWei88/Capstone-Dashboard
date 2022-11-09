import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CompanyHeader from '../components/CompanyHeader';
import DownloadDoneSharpIcon from '@mui/icons-material/DownloadDoneSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

// Child Components

export default function Report({Report}) {
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
                    <Grid item>
                        <div class="mq-assessment-level-header">
                            <h2>List of attributes</h2>
                        </div>
                        <div class="mq-assessment-level"
                            style={{
                                textSizeAdjust: "100%",
                                color: "#191919",
                                fontSize: "1em",
                                fontWeight: "400",
                                lineHeight: "1.5",
                                boxSizing: "inherit",
                                padding: "40px",
                                borderLeft: "2px solid #ECF1FE",
                                borderBottom: "2px solid #ECF1FE",
                            }}
                            >
                            
                            <div class="mq-assessment-answers"
                                style ={{
                                    display: "flex",
                                    alignItems:"center",
                                }}
                            >
                                {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                {Report.hasProtocol === 1
                                    ? <DownloadDoneSharpIcon />
                                    : <CancelSharpIcon />
                                }
                                <p class="mq-assessment-question">
                                    <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                    </span>
                                    A. Has protocols for re
                                    {/* Attribute 14: What scenario has been utilised, and what methodology was applied? */}
                                </p>
                            </div>

                            

                            <div class="mq-assessment-answers"
                                style ={{
                                    display: "flex",
                                    alignItems:"center",
                                }}
                            >
                                {Report.emissionTargetVerified === 1
                                    ? <DownloadDoneSharpIcon />
                                    : <CancelSharpIcon />
                                }
                                <p class="mq-assessment-question">
                                    <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                    </span>
                                    B. Unable to find external verification of emissions
                                    {/* Attribute 15: Are your emission reduction targets externally verified/assured?  */}
                                </p>
                            </div>

                            <div class="mq-assessment-answers"
                                style ={{
                                    display: "flex",
                                    alignItems:"center",
                                }}
                            >
                                {Report.hasNetZeroGoal === 1
                                    ? <DownloadDoneSharpIcon />
                                    : <CancelSharpIcon />
                                }
                                <p class="mq-assessment-question">
                                    <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                    </span>
                                    F. Company has no long term (20-30 years) net zero target/commitment
                                    {/* Attribute 12: Do you have a long term (20 30 years) net zero target/commitment? */}
                                </p>
                            </div>

                            <div class="mq-assessment-answers"
                                style ={{
                                    display: "flex",
                                    alignItems:"center",
                                }}
                            >
                                {Report.hasTransitionPlan === 1
                                    ? <DownloadDoneSharpIcon />
                                    : <CancelSharpIcon />
                                }
                                <p class="mq-assessment-question">
                                    <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                    </span>
                                    I. Company has no low carbon transition plan
                                    {/* Attribute 16: Do you have a low carbon transition plan? */}
                                </p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
