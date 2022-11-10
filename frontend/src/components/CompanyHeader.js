import Box from "@mui/material/Box";

export default function CompanyHeader({companyName, year}) {
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
                <h2> ESG Report for {year}</h2>
                
            </Box>
        </div>
    );
}