import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

if (document.getElementById('root')) {
  document.getElementById('root').innerHTML = ReactDOMServer.renderToStaticMarkup(<App />);
}
