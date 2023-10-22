import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'tachyons';
import App from './App';
import LoginPage from './Components/Forms/LoginPage';
import './index.css';
import reportWebVitals from './reportWebVitals';



if (process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element = {<LoginPage />} />
        <Route path='App' element = {<App />} />
      </Routes>
    
    </BrowserRouter>
  
    
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
