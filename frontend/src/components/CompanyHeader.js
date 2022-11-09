export default function CompanyHeader({companyName}) {
    return (
        <div className="companyHeader">
            <h1 style={{alignItems: "center",}}> {companyName} </h1>
            <h2> Evaluation of key attributes for decarbonisation</h2>
        </div>
    );
}