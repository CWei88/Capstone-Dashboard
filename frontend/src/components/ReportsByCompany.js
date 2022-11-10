import Table from 'react-bootstrap/Table';

export default function ReportsByCompany({reportData, handleReportSelect}) {
    console.log("Report Data" + reportData);
    return (
        <div className="ReportsByCompany">
        <Table striped bordered hover>
        <thead>
        <tr>
            <th>Id</th>
            <th>Company</th>
            <th>Year</th>
        </tr>
        </thead>
        <tbody>
        {reportData.map((item, index) => (
            <tr key={index}>
            <td>{item.id}</td>
            <td>{item.companyName}</td>
            <td>{item.year}</td>
            </tr>
        ))}
        </tbody>
        </Table>

        <div>
        <label>Pick Report:</label>
        <select onSelect={handleReportSelect}>
        {reportData.map((item, index) => (
            <option value={item.year}>{item.year}</option>
        ))}
        </select>
        </div>
        </div>
   );
}