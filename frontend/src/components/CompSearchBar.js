import React, {useState} from 'react'

export default function CompSearchBar({companyData}) {
    const [searchInput, setSearchInput] = useState("");
    var companies = companyData;

    const handleChange = (event) => {
        event.preventDefault();
            setSearchInput(event.target.value);
        };
    
    var valid_companies = []
    if (searchInput.length > 0) {
        valid_companies = companies.filter((company) => {
            return company.companyName.match(searchInput);
        });
    }

    return (
        <div>
            <div>
        <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />
        </div>

        <div>
        <label>Pick Company:</label>
        <select>
        {valid_companies.map((item, index) => (
            <option value={item.companyName}>{item.companyName}</option>
        ))}
        </select>
        </div>

        <div>
            <table>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Industry</th>
            </tr>
            {valid_companies.map((item, index) => (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.industry}</td>
            </tr>
            ))}
            </table>
        </div>
        </div>
        
    );
}
