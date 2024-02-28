'use client';

import { useState } from 'react';

export default function IdentificationForm() {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    window.open(`./welcome?name=${encodeURIComponent(name)}&pin=${encodeURIComponent(pin)}`, '_self');
    // Redirect to the welcome page with the submitted name and pin as query parameters
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      console.log('File is an image', file);
      setFile(file);
    } else {
      setFile(null);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pin">
          Pin Code
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="pin"
          type="password"
          placeholder="********"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="identification-card">
          Identification Card
          <div className="text-xs text-gray-500" title="Please upload an image of your identification card.">
            (Upload an image of your ID, Passport, or Driver's License)
          </div>
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="identification-card"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="rounded-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
