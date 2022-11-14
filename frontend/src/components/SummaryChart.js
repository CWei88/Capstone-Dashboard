import React, {useState, useEffect } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function SummaryChart({summaryData, yearList, industryList}) {
    const [chartData, setChartData] = useState([]);
    const [numReport, setNumReport] = useState(0);
    const [year, setYear] = useState("2019");
    const [industry, setIndustry] = useState("Automobile");

    const handleChange = (event) => {
        if (event.target.name === "year") {
            var currentYear = event.target.value;
            const filteredSummary = summaryData.filter((summary) => {
                return (summary.year.toString() === currentYear && summary.industry === industry);
            })[0];
            console.log(filteredSummary);
            console.log(currentYear);
            console.log(industry);
            setChartData([
                {name: 'numEmissionAmountVerified', num: filteredSummary.numEmissionAmountVerified},
                {name: 'numHasActiveProgram', num: filteredSummary.numHasActiveProgram},
                {name: 'numHasNetZeroGoal', num: filteredSummary.numHasNetZeroGoal},
                {name: 'numHasProtocol', num: filteredSummary.numHasProtocol},
                {name: 'numHasEmissionTargetVerified', num: filteredSummary.numHasEmissionTargetVerified},
                {name: 'numHasTransitionPlan', num: filteredSummary.numHasTransitionPlan},
                {name: 'numHasLeadershipIncentive', num: filteredSummary.numHasLeadershipIncentive},
                {name: 'numHasSupplierEngagement', num: filteredSummary.numHasSupplierEngagement},
                {name: 'numHasValueChainEngagement', num: filteredSummary.numHasValueChainEngagement},
            ]);
            setNumReport(filteredSummary.numReport);
            setYear(currentYear);
        }
        if (event.target.name === "industry") {
            var currentIndustry = event.target.value;
            const filteredSummary = summaryData.filter((summary) => {
                return (summary.year.toString() === year && summary.industry === currentIndustry);
            })[0];
            console.log("Summary Data for Jie Xiang to work with");
            console.log(filteredSummary);
            console.log(year);
            console.log(currentIndustry);
            setChartData([
                {name: 'numEmissionAmountVerified', num: filteredSummary.numEmissionAmountVerified},
                {name: 'numHasActiveProgram', num: filteredSummary.numHasActiveProgram},
                {name: 'numHasNetZeroGoal', num: filteredSummary.numHasNetZeroGoal},
                {name: 'numHasProtocol', num: filteredSummary.numHasProtocol},
                {name: 'numHasEmissionTargetVerified', num: filteredSummary.numHasEmissionTargetVerified},
                {name: 'numHasTransitionPlan', num: filteredSummary.numHasTransitionPlan},
                {name: 'numHasLeadershipIncentive', num: filteredSummary.numHasLeadershipIncentive},
                {name: 'numHasSupplierEngagement', num: filteredSummary.numHasSupplierEngagement},
                {name: 'numHasValueChainEngagement', num: filteredSummary.numHasValueChainEngagement},
            ]);
            setNumReport(filteredSummary.numReport);
            setIndustry(event.target.value);
        }
    };

    

    return (
        <div>
        <div style={{ marginBottom: "10px", }}>
        <label>Pick a year:</label>
        <select name="year" onChange={handleChange}>
        {yearList.map((item, index) => (
            <option value={item}>{item}</option>
        ))}
        </select>

        <label>Pick an Industry:</label>
        <select name="industry" onChange={handleChange}>
        {industryList.map((item, index) => (
            <option value={item}>{item}</option>
        ))}
        </select>

        </div>
        <p>Total number of reports: {numReport}</p>
        <BarChart width={2100} height={600} data={chartData}>
            <Bar dataKey="num" fill="purple" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </BarChart>
        
        </div>
    );
 }