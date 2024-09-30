import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Profiles } from './pages/Profiles';
import { Products } from './pages/Products';
import { ProfileProvider } from './contexts/ProfileContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
   <ProfileProvider>
  
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Profiles' element={<Profiles />} />
      <Route path='/Products' element={<Products />} />
    </Routes>
    </ProfileProvider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
