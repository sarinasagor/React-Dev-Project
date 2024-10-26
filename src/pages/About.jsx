import React from 'react';

function About() {
    const name = 'John Doe';
    const age = 25;
    const isMale = true;
    const hobbies = ['Reading', 'Writing', 'Coding'];
    const address = {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
    };

    return (
        <div className="bg-gray-500 text-white p-5 space-y-4 min-h-screen">
            <h1 className="text-2xl font-bold">About {name}</h1>
            <p>Age: {age}</p>
            <p>Gender: {isMale ? 'Male' : 'Female'}</p>
            <p>Address: {`${address.street}, ${address.city}, ${address.state} - ${address.zip}`}</p>
            <h2 className="text-xl font-semibold">Hobbies:</h2>
            <ul className="list-disc list-inside">
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
}

export default About;
