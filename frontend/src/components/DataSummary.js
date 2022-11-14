import SummaryChart from "./SummaryChart";

export default function DataSummary({Reports}) {
   console.log("All Reports from IndustrySummary");
   // Summary Reports by Year and Industry
   let yearList = [...new Set(Reports.map(item => item.year))]; 
   let industryList = [...new Set(Reports.map(item => item.industry))];
   let summaryData = [];
   for (var i = 0; i < yearList.length; i++) { 
      for (var k = 0; k < industryList.length; k++) {
         var currentYear = yearList[i];
         var currentIndustry = industryList[k];
         var filteredReports = Reports.filter((report) => {
            return (report.year === currentYear && report.industry === currentIndustry);
         });
         console.log(currentYear); 
         console.log(currentIndustry);
         console.log(filteredReports);
         var numReport = filteredReports.length; 
         var numEmissionAmountVerified = filteredReports.reduce((sum, { emissionAmountVerified }) => sum + emissionAmountVerified, 0);
         var numHasActiveProgram = filteredReports.reduce((sum, { hasActiveProgram }) => sum + hasActiveProgram, 0);
         var numHasNetZeroGoal = filteredReports.reduce((sum, { hasNetZeroGoal }) => sum + hasNetZeroGoal, 0);
         var numHasProtocol = filteredReports.reduce((sum, { hasProtocol }) => sum + hasProtocol, 0);
         var numHasEmissionTargetVerified = filteredReports.reduce((sum, { emissionTargetVerified }) => sum + emissionTargetVerified, 0);
         var numHasTransitionPlan = filteredReports.reduce((sum, { hasTransitionPlan }) => sum + hasTransitionPlan, 0);
         var numHasLeadershipIncentive = filteredReports.reduce((sum, { hasLeadershipIncentive }) => sum + hasLeadershipIncentive, 0);
         var numHasSupplierEngagement = filteredReports.reduce((sum, { hasSupplierEngagement }) => sum + hasSupplierEngagement, 0);
         var numHasValueChainEngagement = filteredReports.reduce((sum, { hasValueChainEngagement }) => sum + hasValueChainEngagement, 0);
         summaryData.push({
            year: currentYear, 
            industry: currentIndustry,
            numReport: numReport,
            numEmissionAmountVerified: numEmissionAmountVerified,
            numHasActiveProgram: numHasActiveProgram,
            numHasNetZeroGoal: numHasNetZeroGoal,
            numHasProtocol: numHasProtocol,
            numHasEmissionTargetVerified: numHasEmissionTargetVerified,
            numHasTransitionPlan: numHasTransitionPlan,
            numHasLeadershipIncentive: numHasLeadershipIncentive,
            numHasSupplierEngagement: numHasSupplierEngagement,
            numHasValueChainEngagement: numHasValueChainEngagement
         })
      }

   }
   console.log("SummaryData Data Summary: ");
   console.log(summaryData);
   console.log(yearList);
   console.log(industryList);
   return (
      <div>
         <p>Data Summary</p>
         <SummaryChart summaryData={summaryData} yearList={yearList} industryList={industryList}/>
      </div>
   );
}