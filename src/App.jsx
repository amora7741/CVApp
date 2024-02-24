import { useState } from 'react';

import './App.css';
import GeneralInfo from './components/GeneralInfo';
import InfoContainer from './components/InfoContainer';

function App() {
  return (
    <>
      <InfoContainer>
        <GeneralInfo></GeneralInfo>
      </InfoContainer>
    </>
  );
}

export default App;
