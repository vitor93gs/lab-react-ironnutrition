import { useState } from "react"
import axios from "axios"
import React from 'react';
import { Link } from "react-router-dom";

export function Cadastro(){

    const [objInput, setObj] = useState({
        name:"",
        calories: null,
        image: "",
        quantity: 0
    })

    function handleChange(event){

        setObj({...objInput, [event.target.name]: event.target.value,})
        console.log(objInput)
    }
    function handleSubmit(event){
        event.preventDefault();
        axios.post("../../foods.json",objInput);
    }

    return(
        <form onSubmit={handleSubmit} className="is-justify-content-center">
            <p>
            <label for="comida">Qual a comida? </label>
            <input id="comida" placeholder="Macarrão" name="name" onChange={handleChange}/>
            </p>
            <p>
            <label for="calorias">Quantas calorias na porção?</label>
            <input id="calorias" name="calories" placeholder="123618" onChange={handleChange}/>
            </p>
            <p>
            <label for="imagem">Imagem da besta:</label>
            <input id="imagem" placeholder="https:www.bode.com.br/fotodocrack" name="imagem" onChange={handleChange}/>
            </p>
        	<Link className="is-flex is-justify-content-center" to="/" ><button className="button is-link" type="submit" >Cadastrar comida nova!</button></Link>
        </form>
    )
}


// CRUD - CREATE READ UPDATE DELETE
