import React, {useState} from 'react';

export default function FileUpload() {
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const [companyName, setCompanyName] = useState("");
	const [year, setYear] = useState("");

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('file', selectedFile);
		formData.append('compName', companyName);
		formData.append('year', year);

		fetch(
			'http://localhost:6868/preprocess',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	const inputCompName = (event) => {
        event.preventDefault();
            setCompanyName(event.target.value);
        };
	const inputYear = (event) => {
        event.preventDefault();
            setYear(event.target.value);
        };
		
	return(
   <div>
		<input type="text" placeholder="Company Name" onChange={inputCompName} value={companyName} />
		<input type="number" placeholder="Report Year" onChange={inputYear} value={year} />
		<input type="file" name="file" onChange={changeHandler} />
		{isFilePicked ? (
			<div>
				<p>Filename: {selectedFile.name}</p>
				<p>Filetype: {selectedFile.type}</p>
				<p>Size in bytes: {selectedFile.size}</p>
				<p>
					lastModifiedDate:{' '}
					{selectedFile.lastModifiedDate.toLocaleDateString()}
				</p>
			</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}