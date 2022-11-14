import Box from "@mui/material/Box";

export default function CompanyHeader({companyName, year, industry}) {
    return (
        <div className="companyHeader">
            <Box 
                sx={{
                    width: "100%",
                    backgroundColor: "white",
                    padding: "20px",
                    }}
                >
                <h1 style={{alignItems: "center",}}> {companyName} </h1>
                <h3> ESG Report for {year}</h3>
                <h3>Industry: {industry} </h3>
                
            </Box>
        </div>
    );
}