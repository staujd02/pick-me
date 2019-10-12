import React from 'react';
import './App.scss';
import Picker from '../Picker/Picker';

const App: React.FC = () => {
  let reference = React.createRef() as React.RefObject<HTMLDivElement>;
  return (
    <div className="App" ref={reference}> 
      <Picker />
    </div>
  );
}

export default App;