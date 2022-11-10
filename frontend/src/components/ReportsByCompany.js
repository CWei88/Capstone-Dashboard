import Table from 'react-bootstrap/Table';

export default function ReportsByCompany({reportData, handleReportSelect}) {
    console.log("Report Data" + reportData);
    const handleChange = (event) => {
        handleReportSelect(event.target.value);
    };
    return (
        <div className="ReportsByCompany">

        <div>
        <label style={{ margin:"20px", }}>Pick Report:</label>
        <select onChange={handleChange} style={{ marginBottom:"20px", }}>
        {reportData.map((item, index) => (
            <option value={item.year}>{item.year}</option>
        ))}
        </select>
        </div>

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

        </div>
   );
}