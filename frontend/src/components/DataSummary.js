import YearSummary from "./YearSummary";
import IndustrySummary from "./IndustrySummary";

export default function DataSummary({Reports}) {
   console.log("All Reports from IndustrySummary");
   // Filter for reports in 2019, 2020, 2021, 2022, 2023
   // Summary Reports by Year
   let yearList = [...new Set(Reports.map(item => item.year))]; 
   let summaryByYear = [];
   for (var i = 0; i < yearList.length; i++) { 
      var currentYear = yearList[i];
      console.log(currentYear); 
      var reportByYear = Reports.filter((report) => {
         return report.year === currentYear;
      });
      console.log(currentYear); 
      console.log(reportByYear);
      var numReport = reportByYear.length; 
      var numEmissionAmountVerified = reportByYear.reduce((sum, { emissionAmountVerified }) => sum + emissionAmountVerified, 0);
      var numHasActiveProgram = reportByYear.reduce((sum, { hasActiveProgram }) => sum + hasActiveProgram, 0);
      var numHasNetZeroGoal = reportByYear.reduce((sum, { hasNetZeroGoal }) => sum + hasNetZeroGoal, 0);
      var numHasProtocol = reportByYear.reduce((sum, { hasProtocol }) => sum + hasProtocol, 0);
      var numHasEmissionTargetVerified = reportByYear.reduce((sum, { emissionTargetVerified }) => sum + emissionTargetVerified, 0);
      var numHasTransitionPlan = reportByYear.reduce((sum, { hasTransitionPlan }) => sum + hasTransitionPlan, 0);
      var numHasLeadershipIncentive = reportByYear.reduce((sum, { hasLeadershipIncentive }) => sum + hasLeadershipIncentive, 0);
      var numHasSupplierEngagement = reportByYear.reduce((sum, { hasSupplierEngagement }) => sum + hasSupplierEngagement, 0);
      var numHasValueChainEngagement = reportByYear.reduce((sum, { hasValueChainEngagement }) => sum + hasValueChainEngagement, 0);
      summaryByYear.push({
         year: currentYear, 
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
   console.log("SummaryByYear Data Summary: ");
   console.log(summaryByYear);

   // Summary Report by Industry
   let industryList = [...new Set(Reports.map(item => item.industry))];
   let summaryByIndustry = [];
   for (i = 0; i < industryList.length; i++) { 
      var currentIndustry = industryList[i];
      console.log(currentIndustry); 
      var reportByIndustry = Reports.filter((report) => {
         return report.industry === currentIndustry;
      });
      console.log(currentIndustry); 
      console.log(reportByIndustry);
      numReport = reportByIndustry.length; 
      numEmissionAmountVerified = reportByIndustry.reduce((sum, { emissionAmountVerified }) => sum + emissionAmountVerified, 0);
      numHasActiveProgram = reportByIndustry.reduce((sum, { hasActiveProgram }) => sum + hasActiveProgram, 0);
      numHasNetZeroGoal = reportByIndustry.reduce((sum, { hasNetZeroGoal }) => sum + hasNetZeroGoal, 0);
      numHasProtocol = reportByIndustry.reduce((sum, { hasProtocol }) => sum + hasProtocol, 0);
      numHasEmissionTargetVerified = reportByIndustry.reduce((sum, { emissionTargetVerified }) => sum + emissionTargetVerified, 0);
      numHasTransitionPlan = reportByIndustry.reduce((sum, { hasTransitionPlan }) => sum + hasTransitionPlan, 0);
      numHasLeadershipIncentive = reportByIndustry.reduce((sum, { hasLeadershipIncentive }) => sum + hasLeadershipIncentive, 0);
      numHasSupplierEngagement = reportByIndustry.reduce((sum, { hasSupplierEngagement }) => sum + hasSupplierEngagement, 0);
      numHasValueChainEngagement = reportByIndustry.reduce((sum, { hasValueChainEngagement }) => sum + hasValueChainEngagement, 0);
      summaryByIndustry.push({
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
   console.log("SummaryByIndustry Data Summary: ");
   console.log(summaryByIndustry);
   return (
      <div>
         <p>Data Summary</p>
         <YearSummary summaryByYear={summaryByYear} yearList={yearList}/>
         <IndustrySummary summaryByIndustry={summaryByIndustry} industryList={industryList}/>
      </div>
   );
}