import Table from 'react-bootstrap/Table';

export default function ReportsByCompany({reportData, handleReportSelect}) {
    console.log(reportData);
    return (
        <div className="ReportsByCompany">
        <Table striped bordered hover style={{ borderCollapse:"separate", borderSpacing:"20px 0", border: "1px solid black", borderRadius: "5px",  marginBottom:"10px", padding:"5px" }}>
        <thead>
        <tr>
            <th>ID</th>
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
        <label style={{ marginRight:"20px", }}>Pick Report:</label>
        <select onSelect={handleReportSelect}>
        {reportData.map((item, index) => (
            <option value={item.year}>{item.year}</option>
        ))}
        </select>
        </div>
        </div>
   );
}