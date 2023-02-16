import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function ChangeTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div className="div">Aktif tema : {theme} </div>
      <button onClick={toggleTheme}>ChangeTheme</button>
    </div>
  );
}

export default ChangeTheme;
