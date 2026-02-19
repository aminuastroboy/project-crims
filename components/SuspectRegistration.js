// src/components/SuspectRegistration.js
import React, { useState } from 'react';

function SuspectRegistration() {
    const [suspect, setSuspect] = useState({
        fullName: '',
        alias: '',
        dob: '',
        gender: '',
        nationalId: '',
        address: '',
        riskLevel: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSuspect({
            ...suspect,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you will integrate the backend API to save suspect
        console.log(suspect);
    };

    return (
        <div className="suspect-registration">
            <h2>Register New Suspect</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={suspect.fullName}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="alias"
                    placeholder="Alias / Nickname"
                    value={suspect.alias}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    value={suspect.dob}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={suspect.gender}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="nationalId"
                    placeholder="National ID"
                    value={suspect.nationalId}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={suspect.address}
                    onChange={handleInputChange}
                />
                <select
                    name="riskLevel"
                    value={suspect.riskLevel}
                    onChange={handleInputChange}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button type="submit">Save Suspect</button>
            </form>
        </div>
    );
}

export default SuspectRegistration;
