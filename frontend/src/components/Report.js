import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CompanyHeader from '../components/CompanyHeader';
import StickyHeadTable from './StickyHeadTable';

// Child Components

export default function Report({Report}) {
    console.log(Report);
    return (
        <div style={{ backgroundColor: "#0F172A", width:"100%", height: "100%" }}>
            <CompanyHeader companyName={Report.companyName} year={Report.year} />
            <StickyHeadTable Report={Report}/>
        </div>
    );
}
