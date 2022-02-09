import React from 'react';
import foods from './foods.json';
import { Display } from './components/Display';
import { Cadastro } from './components/Cadastro';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';




//prompt()

function App() {
  console.log(foods)
  return (
    <Router>
      <Link className="is-flex is-justify-content-center" to="cadastro">
        <button className="button is-link">INCLUIR NOVO ALIMENTO</button>
      </Link>
      <Routes>
        <Route path="cadastro" element={<Cadastro/>} />
      </Routes>
      <Display arr={foods}/>
    </Router>
  );
}

export default App;
