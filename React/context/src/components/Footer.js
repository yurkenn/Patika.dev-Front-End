import React from 'react';
import { useLang } from '../contexts/LangContext';
import { useTheme } from '../contexts/ThemeContext';

function Footer() {
  const { theme } = useTheme();
  const { lang } = useLang();
  return (
    <h3>
      <hr />
      <div>Aktif Tema : {theme} </div>
      <div>Aktif Dil : {lang} </div>
    </h3>
  );
}

export default Footer;
