import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CompanyHeader from '../components/CompanyHeader';
import DownloadDoneSharpIcon from '@mui/icons-material/DownloadDoneSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import ReportTable from '../components/ReportTable';

// Child Components

function Company() {
    const [companies, setCompanies] = useState([]);
    const [reports, setReports] = useState([]);
    const fetchData = () => {
        fetch(`http://localhost:6868/company`)
        .then((response) => response.json())
        .then((actualData) => {
            console.log(actualData);
            setCompanies(actualData);
            console.log(companies);
        })
        .catch((err) => {
            console.log(err.message);
        });

        fetch(`http://localhost:6868/report`)
        .then((response) => response.json())
        .then((actualData) => {
            console.log(actualData);
            setReports(actualData);
            console.log(reports);
        })
        .catch((err) => {
            console.log(err.message);
        });
    };
    
    useEffect(() => {
        fetchData();
    });

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
                        <CompanyHeader companyData={companies}/>
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
                            <h2>Decarbonisation not seen as an issue for the company</h2>
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
                                <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                <p class="mq-assessment-question">
                                    <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                    </span>
                                    A. No protocols for reducing emissions found
                                    {/* Attribute 14: What scenario has been utilised, and what methodology was applied? */}
                                </p>
                            </div>

                            

                            <div class="mq-assessment-answers"
                                style ={{
                                    display: "flex",
                                    alignItems:"center",
                                }}
                            >
                                <CancelSharpIcon />
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
                                <DownloadDoneSharpIcon />
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
                                <DownloadDoneSharpIcon />
                                <p class="mq-assessment-question">
                                    <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                    </span>
                                    I. Company has no low carbon transition plan
                                    {/* Attribute 16: Do you have a low carbon transition plan? */}
                                </p>
                            </div>

                            
                        </div>
                        
                        <div class="mq-assessment-level-header">
                            <h2>Company sets goals and guidelines to achieve decarbonisation goals</h2>
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
                                <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                <p class="mq-assessment-question">
                                    <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                    </span>
                                    B. Emissions are verified externally/independently, but no company is mentioned
                                    {/* Attribute 15: Are your emission reduction targets externally verified/assured?  */}
                                </p>
                            </div>

                            <div class="mq-assessment-answers"
                                style ={{
                                    display: "flex",
                                    alignItems:"center",
                                }}
                            >
                                <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                <p class="mq-assessment-question">
                                    <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                    </span>
                                    C. Company has guidelines to regulate and monitor value chain
                                    {/* Attribute 25: Do you engage with value chain on climate-related issues */}
                                </p>
                            </div>

                            <div class="mq-assessment-answers"
                                style ={{
                                    display: "flex",
                                    alignItems:"center",
                                }}
                            >
                                <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                <p class="mq-assessment-question">
                                    <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                    </span>
                                    D. Company Scope 1 - 2 & Scope 3 emissions not verified by third party
                                    {/* Attribute 7: Have your Scope 1 - 2 & Scope 3 emissions been verified by a third party? */}
                                </p>
                            </div>

                            <div class="mq-assessment-answers"
                                style ={{
                                    display: "flex",
                                    alignItems:"center",
                                }}
                            >
                                <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                <p class="mq-assessment-question">
                                    <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                    </span>
                                    I. Company has low carbon transition plan
                                    {/* Attribute 16: Do you have a low carbon transition plan? */}
                                </p>
                            </div>
                            </div>

                            <div class="mq-assessment-level-header">
                            <h2>Company somewhat achieves goals and targets it sets in decarbonisation</h2>
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
                                    <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                    <p class="mq-assessment-question">
                                        <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                        </span>
                                        J. Company provides incentives to leadership for management of climate related issues
                                        {/* Attribute 17: Do you provide incentives to your senior leadership team for the management of climate related issues? */}
                                    </p>
                                </div>

                                <div class="mq-assessment-answers"
                                    style ={{
                                        display: "flex",
                                        alignItems:"center",
                                    }}
                                >
                                    <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                    <p class="mq-assessment-question">
                                        <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                        </span>
                                        A. Protocol followed, but is not part of the 4 protocols (GHG, SBTi, TCFD, SASB)
                                        {/* Attribute 14: What scenario has been utilised, and what methodology was applied? */}
                                    </p>
                                </div>
                                </div>

                            <div class="mq-assessment-level-header">
                            <h2>Company achieves goals and targets it sets in decarbonisation to a large degree</h2>
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
                                    <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                    <p class="mq-assessment-question">
                                        <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                        </span>
                                        A. Protocol followed, and is one or more of the 4 protocols above (GHG, SBTi, TCFD, SASB)
                                        {/* Attribute 14: What scenario has been utilised, and what methodology was applied? */}
                                    </p>
                                </div>

                                <div class="mq-assessment-answers"
                                    style ={{
                                        display: "flex",
                                        alignItems:"center",
                                    }}
                                >
                                    <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                    <p class="mq-assessment-question">
                                        <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                        </span>
                                        B. Emissions are verified externally/independently, and a company is found.
                                        {/* Attribute 15: Are your emission reduction targets externally verified/assured?  */}
                                    </p>
                                </div>

                                <div class="mq-assessment-answers"
                                    style ={{
                                        display: "flex",
                                        alignItems:"center",
                                    }}
                                >
                                    <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                    <p class="mq-assessment-question">
                                        <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                        </span>
                                        C. Company actively engages value chain
                                        {/* Attribute 25: Do you engage with value chain on climate-related issues? */}
                                    </p>
                                </div>

                                <div class="mq-assessment-answers"
                                    style ={{
                                        display: "flex",
                                        alignItems:"center",
                                    }}
                                >
                                    <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                    <p class="mq-assessment-question">
                                        <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                        </span>
                                        D. Company Scope 1 - 2 & Scope 3 emissions verified by third party
                                        {/* Attribute 7: Have your Scope 1 - 2 & Scope 3 emissions been verified by a third party? */}
                                    </p>
                                </div>

                                <div class="mq-assessment-answers"
                                    style ={{
                                        display: "flex",
                                        alignItems:"center",
                                    }}
                                >
                                    <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                    <p class="mq-assessment-question">
                                        <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                        </span>
                                        E. Company has active program to support increasing green space and promote biodiversity
                                        {/* Attribute 8: Do you have an active program to support increasing green space and promote biodiversity? */}
                                    </p>
                                </div>

                                <div class="mq-assessment-answers"
                                    style ={{
                                        display: "flex",
                                        alignItems:"center",
                                    }}
                                >
                                    <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                    <p class="mq-assessment-question">
                                        <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                        </span>
                                        F. Company has a long term (20-30 years) net zero target/commitment
                                        {/* Attribute 12: Do you have a long term (20 30 years) net zero target/commitment? */}
                                    </p>
                                </div>

                                <div class="mq-assessment-answers"
                                    style ={{
                                        display: "flex",
                                        alignItems:"center",
                                    }}
                                >
                                    <DownloadDoneSharpIcon /> {/* yes means DoneSharpIcon, no means CancelSharpIcon*/}
                                    <p class="mq-assessment-question">
                                        <span class="mq-assessment-answer mq-assessment-answer--yes level0">
                                        </span>
                                        G. There is evidence of company's emission reduction targets being externally verified
                                        {/* Attribute 15: Are your emission reduction targets externally verified/assured?  */}
                                    </p>
                                </div>
                                </div>
                    </Grid>

                </Grid>

                <Grid>
                    <Grid item>
                        <ReportTable />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Company;

