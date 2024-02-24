import React, { useState } from 'react';

function GeneralInfo() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setGeneralInfo({
      ...generalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
      <h2>General Info</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            value={generalInfo.name}
            onChange={handleChange}
            placeholder='Name'
          />
          <input
            type='email'
            name='email'
            value={generalInfo.email}
            onChange={handleChange}
            placeholder='Email'
          />
          <input
            type='tel'
            name='phoneNumber'
            value={generalInfo.phoneNumber}
            onChange={handleChange}
            placeholder='Phone Number'
          />
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone Number: {generalInfo.phoneNumber}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </>
  );
}

export default GeneralInfo;
