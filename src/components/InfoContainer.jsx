import React from 'react';

function InfoContainer({ className, children }) {
  return <div className={`infoContainer ${className}`}>{children}</div>;
}

export default InfoContainer;
