import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';
import { NotificationProvider } from 'web3uikit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider appId='Z6nLxgwmofPx7Or7bYK6vsINYuYWxNf0FQnDRjFn' serverUrl='https://3t2cfz3eqrvs.usemoralis.com:2053/server'>
      <NotificationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>
);


reportWebVitals();