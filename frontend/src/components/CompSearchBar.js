import React, {useState} from 'react'

export default function CompSearchBar({companyData, handleCompanySelect}) {
    const [searchInput, setSearchInput] = useState("");
    var companies = companyData;

    const handleChange = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);
        handleCompanySelect(searchInput)
    };

    
    var valid_companies = []
    if (searchInput.length > 0) {
        valid_companies = companies.filter((company) => {
            return company.companyName.match(searchInput);
        });
    }

    return (
        <div>
        <div class="compInputBar" style={{ marginBottom: "10px", }}>
        <div>
        <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />
        </div>

        <div style={{ marginBottom: "10px", }}>
        <label>Pick Company:</label>
        <select onSelect={handleChange}>
        {valid_companies.map((item, index) => (
            <option value={item.companyName}>{item.companyName}</option>
        ))}
        </select>
        </div>

        <div>
            <table style={{ borderCollapse:"separate", borderSpacing:"20px 0", border: "1px solid black", borderRadius: "5px",  padding:"5px"}}>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Industry</th>
                </tr>
            </thead>
            <tbody>
                {valid_companies.map((item, index) => (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.companyName}</td>
                    <td>{item.industry}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
  
    );
}
