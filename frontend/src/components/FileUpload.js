import Papa from "papaparse";
import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FileUpload() {
	const [companyName, setCompanyName] = useState("");
	const [year, setYear] = useState("");
	const [industry, setIndustry] = useState("");

	const navigate = useNavigate();

	const handleFileUpload = (event) => {
		const files = event.target.files;
			console.log(files);
			if (files) {
				console.log(files[0]);
				var results = Papa.parse(files[0], {
					header: true,
					complete: async function(results) {
						console.log("Finished:", results.data);
						const csvData = results.data;
						await axios.post("http://localhost:6868/report", {
							companyName: companyName,
							year: year,
							industry: industry,
							emissionAmountVerifiedSentences: csvData[0].sentence,
							hasActiveProgramSentences: csvData[1].sentence, 
							hasNetZeroGoalSentences: csvData[2].sentence, 
							hasProtocolSentences: csvData[3].sentence
						}).then((response) => {
							//console.log(response.data.token);
							return response.data.token;
							})
							.catch((error) => {
								console.log(error);
							});;
						navigate("/");
					}
				});
				console.log("Papaparse Result");				
			}
	};

	const inputCompName = (event) => {
        event.preventDefault();
        setCompanyName(event.target.value);
        };
	const inputYear = (event) => {
        event.preventDefault();
        setYear(event.target.value);
        };
	const inputIndustry = (event) => {
		event.preventDefault();
		setIndustry(event.target.value);
		};
	return(
   <div>
		<input type="text" placeholder="Company Name" onChange={inputCompName} value={companyName} />
		<input type="text" placeholder="Industry" onChange={inputIndustry} value={industry} />
		<input type="number" placeholder="Report Year" onChange={inputYear} value={year} />
		<input type="file" name="file" accept=".csv" onChange={handleFileUpload} />
		</div>
	)
}