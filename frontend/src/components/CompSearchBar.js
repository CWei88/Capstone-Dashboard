import React, {useState} from 'react'

export default function CompSearchBar({companyData, handleCompanySelect}) {
    var companies = companyData;

    const handleChange = (event) => {
        console.log("Handle Change CompSearchBar" + event.target.value);
        handleCompanySelect(event.target.value);
    };


    return (
        <div class="compInputBar" style={{ marginBottom: "10px", }}>
        <div style={{ marginBottom: "10px", }}>
        <label>Pick Company:</label>
        <select onChange={handleChange}>
        {companies.map((item, index) => (
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
                {companies.map((item, index) => (
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
