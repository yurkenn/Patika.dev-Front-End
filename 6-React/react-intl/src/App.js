import { useEffect, useState } from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';
import './App.css';

const messages = {
  'tr-TR': {
    title: 'Merhaba',
    description: '{count} yeni msj var',
  },
  'en-US': {
    title: 'Hello',
    description: '{count} new msg',
  },
};

function App() {
  const isLocale = localStorage.getItem('locale');
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <h2>
          <FormattedMessage id="title" />
        </h2>
        <p>
          <FormattedMessage id="description" values={{ count: 3 }} />
        </p>
        <br />
        <br />
        <button onClick={() => setLocale('tr-TR')}>TR</button>
        <button onClick={() => setLocale('en-US')}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
