import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import s from '../styles/NavBarStyle.module.css'

export default function NavBar({handleClick}){


    return (
        <div>
            
            
            <h1>DAMI GAMES</h1>
            <Link to='/game'><button className={`${s.btnColor} ${s.btn}`}>Crear VideoJuego</button></Link>
            <button className={`${s.btnColor} ${s.btn}`} onClick={e => { handleClick(e) }}>Refresh</button>
            <SearchBar />
        </div>
    );
}