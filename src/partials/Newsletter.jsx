import React, { useState } from 'react';
import axios from 'axios';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const handleValidation = () => {
    if (!name || !email || !phoneNumber || !query) {
      alert('Please fill in all the required fields');
      return false;
    }
    return true;
  };

  const addRowToAirtable = async (event) => {
    event.preventDefault();

    if (!handleValidation()) return;

    const accessToken = 'patxAGGecID38tmhc.3d57e6df733d67753c263aafa3852bbdf07a7cb33c1519621e829cae1472f850';
    const endpoint = `https://api.airtable.com/v0/appS9FHPcSPN3aQHq/Form`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };
    const data = {
      records: [{
        fields: {
          Name: name,
          EmailID: email,
          PhoneNumber: phoneNumber,
          Query: query
        }
      }]
    };

    try {
      await axios.post(endpoint, data, { headers });
      setDisabled(true);
      setShowResults(true);
      document.getElementById('form').reset();
    } catch (error) {
      console.error(error);
      alert('Failed to submit. Please try again later.');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const WaitlistMessage = () => (<span className='h5 text-white'>🎉 Thank you for contacting us! You will receive an email/call from us once we look at your query.</span>);

  return (
    <section id={"Waitlist"}>
      {/* Your JSX */}
    </section>
  );
}

export default function App() {
  return (
    <div style={{ margin: '0px 0' }}>
      {/* Space before Newsletter */}
      <Newsletter />
      {/* Space after Newsletter */}
      <div style={{ marginBottom: '200px' }}></div>
    </div>
  );
}
