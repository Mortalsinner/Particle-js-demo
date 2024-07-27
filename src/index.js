import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Component/Home';
import ParticleComponent from './ParticleComponent'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className='wrapper'>
    <div className='content'>
      <Home />
    </div>
  </div>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();