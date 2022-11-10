import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";

// Child Components
import CompanyList from '../components/CompanyList';
import CompSearchBar from '../components/CompSearchBar';
import FileUpload from '../components/FileUpload';
import ReportsByCompany from '../components/ReportsByCompany';
import Report from '../components/Report';

function HomeDashboard() {
    const [companies, setCompanies] = useState([]);
    const [company, setCompany] = useState("BMW");
    const [reports, setReports] = useState([]);
    const [report, setReport] = useState();

    const fetchData = async() => {
        const resComapny = await axios.get("http://localhost:6868/company")
        const dataCompany = await resComapny.data
        setCompanies(dataCompany)
        
        const resReport = await axios.get("http://localhost:6868/report/companyName/" + company)
        const dataReport = await resReport.data
        setReports(dataReport)
    }

    useEffect(() => {
        fetchData()
    })
    
    const handleCompanySelect = (companyName) => {
        setCompany(companyName);
        console.log("Handle Select Company, HomeDashboard:" + companyName);
        fetchData();
    }

    const handleReportSelect = (year) => {
        var chosen_report = reports.filter((report) => {
                return report.year.match(year);
            })[0];
        setReport(chosen_report);
        console.log("Handle Select Report, HomeDashboard:" + year);
        fetchData();
    }

    return (
        <div style={{ backgroundColor: "#0F172A", height: "100vh" }}>

        <Box
            sx={{
            width: "100%",
            backgroundColor: "white",
            padding: "20px",
            margin: "10px",
            borderRadius: "10px",
            marginBottom: "10px",
            }}
        >

        <Grid container>
            <Grid item>
                <CompSearchBar companyData={companies} handleCompanySelect={handleCompanySelect}/>
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
                {report
                    ? <Report Report={report} handleReportSelect={handleReportSelect} />
                    : <p>No reports found</p>
                }
            </Grid>
        </Grid>
        </Box>

        </div>
    );
}

export default HomeDashboard;