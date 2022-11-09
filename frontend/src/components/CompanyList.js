import Table from 'react-bootstrap/Table';

export default function CompanyList({companyData}) {
    console.log(companyData);
    return (
      <div className="CompanyList">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Industry</th>
          </tr>
        </thead>
        <tbody>
        {companyData.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.companyName}</td>
            <td>{item.industry}</td>
          </tr>
        ))}
        </tbody>
      </Table>   
      </div>
   );
}