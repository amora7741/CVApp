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
      <div className='fieldholder'>
        <input
          id='name'
          type='text'
          name='name'
          value={generalInfo.name || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor='name'>Name</label>
      </div>
      <div className='fieldholder'>
        <input
          id='email'
          type='email'
          name='email'
          value={generalInfo.email || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor='email'>Email</label>
      </div>
      <div className='fieldholder'>
        <input
          id='phone'
          type='tel'
          name='phone'
          value={generalInfo.phone || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor='phone'>Phone Number</label>
      </div>
    </section>
  );
}

export default GeneralInfo;
