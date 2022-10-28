export default function CompanyList({companyData}) {
    console.log(companyData);
    return (
      <div className="CompanyList">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Industry</th>
      </tr>
      {companyData.map((item, index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.companyName}</td>
          <td>{item.industry}</td>
        </tr>
      ))}
      </div>
   );
}