import React from 'react';

function GeneralInfo({ generalInfo, onChange }) {
  const handleChange = (event) => {
    onChange({
      ...generalInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className='generalInfo'>
      <input
        type='text'
        name='name'
        value={generalInfo.name || ''}
        onChange={handleChange}
        placeholder='Name'
      />
      <input
        type='email'
        name='email'
        value={generalInfo.email || ''}
        onChange={handleChange}
        placeholder='Email'
      />
      <input
        type='tel'
        name='phone'
        value={generalInfo.phone || ''}
        onChange={handleChange}
        placeholder='Phone'
      />
    </section>
  );
}

export default GeneralInfo;
