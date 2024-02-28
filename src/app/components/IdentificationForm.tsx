'use client';

import { useState } from 'react';

export default function IdentificationForm() {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError(null);

    if (!file || !pin || !name) {
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('pin', pin);
    formData.append('identification-card', file as any);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        window.open(`./thank-you`, '_self');
      } else {
        if (result.reason === 'details-no-match') {
          setError('The details you provided do not match the transaction details. Please try again.');
        } else {
          setError('something went wrong, please try again later.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setError(null);
      setFile(file);
    } else {
      setError('The uploaded file must be an image');
      setFile(null);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {error && <div className="text-red-700 p-3 rounded bg-red-100 border-red-700">{error}</div>}
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="name">
          Account Holder Name
        </label>
        <input
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="pin">
          Pin Code
          <div className="text-xs text-gray-500" title="Please upload an image of your identification card.">
            Was sent to sender by SMS
          </div>
        </label>
        <input
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="pin"
          type="password"
          placeholder="********"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="identification-card">
          Identification
          <div className="text-xs text-gray-500" title="Please upload an image of your identification card.">
            {`(Upload an image of your ID or Passport or Driver's License)`}
          </div>
        </label>
        <input
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="identification-card"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="rounded-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
      </form>
    </div>
  );
}
