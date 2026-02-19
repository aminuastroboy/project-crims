// src/components/CrimeRecords.js
import React, { useState } from 'react';

function CrimeRecords() {
    const [crime, setCrime] = useState({
        crimeType: '',
        description: '',
        date: '',
        status: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCrime({
            ...crime,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you will integrate the backend API to save crime record
        console.log(crime);
    };

    return (
        <div className="crime-records">
            <h2>Add Crime Record</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="crimeType"
                    placeholder="Crime Type"
                    value={crime.crimeType}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Crime Description"
                    value={crime.description}
                    onChange={handleInputChange}
                ></textarea>
                <input
                    type="date"
                    name="date"
                    value={crime.date}
                    onChange={handleInputChange}
                />
                <select
                    name="status"
                    value={crime.status}
                    onChange={handleInputChange}
                >
                    <option value="charged">Charged</option>
                    <option value="inCourt">In Court</option>
                    <option value="convicted">Convicted</option>
                </select>
                <button type="submit">Add Crime</button>
            </form>
        </div>
    );
}

export default CrimeRecords;
