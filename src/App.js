import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ["red", "green", "blue", "yellow", "purple"];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
