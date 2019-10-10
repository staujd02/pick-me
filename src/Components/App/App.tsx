import React from 'react';
import './App.scss';

const App: React.FC = () => {
  let reference = React.createRef() as React.RefObject<HTMLDivElement>;
  return (
    <div className="App" ref={reference} onClick={() => goFullScreen(reference)}>
    </div>
  );
}

const goFullScreen = (reference: React.RefObject<HTMLDivElement>): void => {
  if (reference.current)
    reference.current.requestFullscreen();
}

export default App;
