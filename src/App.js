import React from 'react';
import './css/App.css';
import './css/Header.css';
import './css/Body.css';
import './css/Text.css';
import Header from './componets/header.js'
import Body from './componets/body.js'
function App() {
  return (
    <div className="container">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
