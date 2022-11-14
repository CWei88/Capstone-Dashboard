import React, {useState} from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function YearSummary({summaryByYear, yearList}) {
    const [chartData, setChartData] = useState();
    const [numYearlyReport, setNumYearlyReport] = useState();


    const handleChange = (event) => {
        const year = event.target.value;
        console.log("Handle Change YearSummary" + event.target.value);
        console.log(summaryByYear);
        console.log("Year: ")
        console.log(year);
        const reportByYear = summaryByYear.filter((summary) => {
            return summary.year.toString() === year;
        })[0];
        console.log("Current year Summary");
        console.log(reportByYear)
        setChartData([
            {name: 'numEmissionAmountVerified', num: reportByYear.numEmissionAmountVerified},
            {name: 'numHasActiveProgram', num: reportByYear.numHasActiveProgram},
            {name: 'numHasNetZeroGoal', num: reportByYear.numHasNetZeroGoal},
            {name: 'numHasProtocol', num: reportByYear.numHasProtocol},
            {name: 'numHasEmissionTargetVerified', num: reportByYear.numHasEmissionTargetVerified},
            {name: 'numHasTransitionPlan', num: reportByYear.numHasTransitionPlan},
            {name: 'numHasLeadershipIncentive', num: reportByYear.numHasLeadershipIncentive},
            {name: 'numHasSupplierEngagement', num: reportByYear.numHasSupplierEngagement},
            {name: 'numHasValueChainEngagement', num: reportByYear.numHasValueChainEngagement},
        ]);
        setNumYearlyReport(reportByYear.numReport);

    };

    

    return (
        <div>
        <div style={{ marginBottom: "10px", }}>
        <label>Pick a year:</label>
        <select onChange={handleChange}>
        {yearList.map((item, index) => (
            <option value={item}>{item}</option>
        ))}
        </select>
        </div>
        <p>Total number of reports: {numYearlyReport}</p>
        {chartData
            ?   <BarChart width={1500} height={600} data={chartData}>
                    <Bar dataKey="num" fill="green" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>
            : <p>Choose Year</p>
        }
        
        </div>
    );
 }