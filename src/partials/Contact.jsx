import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Create the Airtable endpoint
    const endpoint = 'https://api.airtable.com/v0/appS9FHPcSPN3aQHq/arman';

    // Prepare the data to be sent
    const data = {
      records: [
        {
          fields: {
            Name: name,
            Email: email,
            Phone: phone,
            Message: message,
          },
        },
      ],
    };

    // Prepare headers with the access token
    const headers = {
      Authorization: 'Bearer patxAGGecID38tmhc.a37e99d75f4703e8121d91af7a9a83d69b56724b5471374412abd3a7ccd6158d',
      'Content-Type': 'application/json',
    };

    try {
      // Make a POST request to Airtable API
      await axios.post(endpoint, data, { headers });
      setSubmitting(false);
      setSubmitted(true);
      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setSubmitting(false);
      // Handle error
    }
  };

  return (
    <section id="contact" className="py-40 pb-10 bg-white">
      <div className="container mx-auto">
        <h2 className="h2 opacity-20 mb-10 px-5 text-center">Submit a Query</h2>
        {submitted ? (
          <p className="text-green-600 text-center mb-4">Your query has been submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded py-2 px-3" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded py-2 px-3" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1">Phone</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border rounded py-2 px-3" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" className="w-full border rounded py-2 px-3" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full" disabled={submitting}>Submit</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
