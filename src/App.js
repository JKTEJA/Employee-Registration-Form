import React from 'react';
import { BrowserRouter as Router ,Routes,Route,Link } from "react-router-dom"
import Editform from './Editform';
import Empform from './Empform';
import './App.css'


function App() {
  return (
    <div className="App">
      <Router>
<header className='snd'>
      <Link className='jk' to="/">Empform</Link>
      <Link className='jk' to="/editform">Editform</Link>
      </header>
  <Routes>
  <Route path='/' element={<Empform/>}/>
  <Route path='/editform' element={<Editform/>}/>
  </Routes>
  </Router>

    </div>
  );
}

export default App;
