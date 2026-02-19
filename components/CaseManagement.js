// src/components/CaseManagement.js
import React, { useState } from 'react';

function CaseManagement() {
    const [caseDetails, setCaseDetails] = useState({
        caseId: '',
        crimeType: '',
        description: '',
        suspectId: '',
        assignedOfficer: '',
        caseStatus: 'Open'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCaseDetails({
            ...caseDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can replace this with an API call to save the case
        console.log("Case Saved: ", caseDetails);
    };

    return (
        <div className="case-management">
            <h2>Manage Case</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="caseId"
                    placeholder="Case ID"
                    value={caseDetails.caseId}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="crimeType"
                    placeholder="Crime Type"
                    value={caseDetails.crimeType}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Case Description"
                    value={caseDetails.description}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <input
                    type="text"
                    name="suspectId"
                    placeholder="Suspect ID"
                    value={caseDetails.suspectId}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="assignedOfficer"
                    placeholder="Assigned Officer"
                    value={caseDetails.assignedOfficer}
                    onChange={handleInputChange}
                    required
                />
                <select
                    name="caseStatus"
                    value={caseDetails.caseStatus}
                    onChange={handleInputChange}
                >
                    <option value="Open">Open</option>
                    <option value="Under Investigation">Under Investigation</option>
                    <option value="Closed">Closed</option>
                </select>
                <button type="submit">Save Case</button>
            </form>
        </div>
    );
}

export default CaseManagement;
