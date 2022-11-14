import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";

// Child Components
import CompSearchBar from '../components/CompSearchBar';
import ReportsByCompany from '../components/ReportsByCompany';
import Report from '../components/Report';
import FileUpload from '../components/FileUpload';
import DataSummary from '../components/DataSummary';


function HomeDashboard() {
    const [companies, setCompanies] = useState([]);
    const [company, setCompany] = useState("");
    const [allReports, setAllReports] = useState([]);
    const [reports, setReports] = useState([]);
    const [report, setReport] = useState();

    const fetchData = async() => {
        const resComapny = await axios.get("http://localhost:6868/company")
        const dataCompany = await resComapny.data
        setCompanies(dataCompany)

        const resAllReports = await axios.get("http://localhost:6868/report")
        const dataAllReports = await resAllReports.data
        setAllReports(dataAllReports)
    }

    useEffect(() => {
        fetchData()
    }, []);
    
    const handleCompanySelect = async(companyName) => {
        console.log("Company from HandleCompanySelect" + companyName)
        setCompany(companyName);
        console.log("Handle Select Company, HomeDashboard:" + company);
        var compNameWithoutSpace = companyName.replace(' ', '_');
        console.log("http://localhost:6868/report/companyName/" + compNameWithoutSpace);
        const resReport = await axios.get("http://localhost:6868/report/companyName/" + companyName)
        const dataReport = await resReport.data
        setReports(dataReport)
    }

    const handleReportSelect = (year) => {
        console.log("All reports");
        console.log(reports);
        if (year !== "Default option") {
            var chosen_report = reports.filter((report) => {
                console.log(report.year);
                console.log(year);
                return report.year.toString() === year;
            });
            console.log("1 Report");
            console.log(chosen_report);
            setReport(chosen_report[0]);
            console.log("Handle Select Report, HomeDashboard:" + year);
        }
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
            <FileUpload />
        </Box>

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
            <Grid item sx={{
                margin: "10px"
            }}>
                <CompSearchBar companyData={companies} handleCompanySelect={handleCompanySelect}/>
            </Grid>
            <Grid item sx={{
                margin: "10px"
            }}>
                <ReportsByCompany reportData={reports} handleReportSelect={handleReportSelect}/>
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
                    ? <Report Report={report} />
                    : <p>No report found</p>
                }
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
                <DataSummary Reports={allReports} />
            </Grid>
        </Grid>
        </Box>

        </div>
    );
}

export default HomeDashboard;