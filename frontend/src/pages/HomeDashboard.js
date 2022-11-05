import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

// Child Components
import CompanyList from '../components/CompanyList';
import CompSearchBar from '../components/CompSearchBar';
import FileUpload from '../components/FileUpload';
import ReportsByCompany from '../components/ReportsByCompany';

function HomeDashboard() {
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
                <CompanyList companyData={companies}/>   
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
                <CompSearchBar companyData={companies} />
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
                <FileUpload />
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
                <ReportsByCompany reportData={reports} />
            </Grid>
        </Grid>
        </Box>
        
        </div>
    );
}

export default HomeDashboard;