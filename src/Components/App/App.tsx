import React from 'react';
import './App.scss';
import Picker from '../Picker/Picker';
import OptionRepo from '../../Repos/OptionRepo';

const App: React.FC = () => {
  return (
    <div className="App"> 
      <Picker optionsRepo={new OptionRepo()} />
    </div>
  );
}

export default App;