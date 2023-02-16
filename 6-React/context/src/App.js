import './styles.css';
import React from 'react';
import { LangContextProvider } from './contexts/LangContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import Container from './Container';
import Footer from './components/Footer';
const App = () => {
  return (
    <LangContextProvider>
      <ThemeContextProvider>
        <Container />
        <Footer />
      </ThemeContextProvider>
    </LangContextProvider>
  );
};

export default App;
