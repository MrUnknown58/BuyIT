import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { AppProvider } from './ContextAI/statescontext';
import { BackendAPIProvider } from './ContextAI/BackendAPI';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BackendAPIProvider>
  <AppProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </AppProvider>
  </BackendAPIProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
