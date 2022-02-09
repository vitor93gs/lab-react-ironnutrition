import React, { useState } from 'react';
import foods from './foods.json';
import { Display } from './components/Display';
import { Cadastro } from './components/Cadastro';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';




//prompt()

function App() {
  const [ArrFoods, setArrFoods] = useState(foods)
  console.log(foods)
  return (
    <Router>
      <Link className="is-flex is-justify-content-center" to="cadastro">
        <button className="button is-link">INCLUIR NOVO ALIMENTO</button>
      </Link>
      <Routes>
        <Route path="cadastro" element={<Cadastro setArr={setArrFoods} ArrInic={ArrFoods}/>} />
      </Routes>
      <Display arr={ArrFoods}/>
    </Router>
  );
}

export default App;
