// src/api.js

const apiUrl = "https://your-backend-api.com";

export const createSuspect = (suspectData) => {
    return fetch(`${apiUrl}/suspects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(suspectData)
    });
};

export const createCrimeRecord = (crimeData) => {
    return fetch(`${apiUrl}/crime-records`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(crimeData)
    });
};
