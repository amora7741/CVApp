import React from 'react';

function DisplayInfo({ generalInfo, educationInfo, practicalInfo }) {
  return (
    <div>
      <h1>Submitted Information</h1>
      <div>
        <h3>General Information</h3>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </div>
    </div>
  );
}

export default DisplayInfo;
