import React, {useState} from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function IndustrySummary({summaryByIndustry, industryList}) {
    const [chartData, setChartData] = useState();
    const [numIndustryReport, setNumIndustryReport] = useState();


    const handleChange = (event) => {
        const industry = event.target.value;
        console.log("Handle Change IndustrySummary" + event.target.value);
        console.log(summaryByIndustry);
        console.log("Industry: ")
        console.log(industry);
        const reportByIndustry = summaryByIndustry.filter((summary) => {
            return summary.industry === industry;
        })[0];
        console.log("Current Industry Summary");
        console.log(reportByIndustry)
        setChartData([
            {name: 'numEmissionAmountVerified', num: reportByIndustry.numEmissionAmountVerified},
            {name: 'numHasActiveProgram', num: reportByIndustry.numHasActiveProgram},
            {name: 'numHasNetZeroGoal', num: reportByIndustry.numHasNetZeroGoal},
            {name: 'numHasProtocol', num: reportByIndustry.numHasProtocol},
            {name: 'numHasEmissionTargetVerified', num: reportByIndustry.numHasEmissionTargetVerified},
            {name: 'numHasTransitionPlan', num: reportByIndustry.numHasTransitionPlan},
            {name: 'numHasLeadershipIncentive', num: reportByIndustry.numHasLeadershipIncentive},
            {name: 'numHasSupplierEngagement', num: reportByIndustry.numHasSupplierEngagement},
            {name: 'numHasValueChainEngagement', num: reportByIndustry.numHasValueChainEngagement},
        ]);
        setNumIndustryReport(reportByIndustry.numReport);

    };

    

    return (
        <div>
        <div style={{ marginBottom: "10px", }}>
        <label>Pick a industry:</label>
        <select onChange={handleChange}>
        {industryList.map((item, index) => (
            <option value={item}>{item}</option>
        ))}
        </select>
        </div>
        <p>Total number of reports: {numIndustryReport}</p>
        {chartData
            ?   <BarChart width={1500} height={600} data={chartData}>
                    <Bar dataKey="num" fill="green" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>
            : <p>Choose Industry</p>
        }
        
        </div>
    );
 }