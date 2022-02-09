import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../actions";
import s from '../styles/SearchBar.module.css'


export default function SearchBar() {

  const dispatch = useDispatch();
  const [name, setName] = useState('');

function handleInput(e){
  e.preventDefault();
  setName(e.target.value)
  console.log(name)
}

function handleSubmit(e){
  e.preventDefault();
  dispatch(getName(name))
  
}
  
  return (
  <div className={s.container}>
    <input className={s.barra}
     type="text" placeholder='   Buscar Juego'
     onChange ={(e) =>handleInput(e)}/>

    <button type ='submit' className={`${s.btnColor} ${s.btn}`} 
    onClick={(e) => handleSubmit(e)} >Buscar</button>

  </div>
  )
};