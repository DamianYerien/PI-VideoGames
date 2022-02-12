import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import s from '../Styles/NavBarStyle.module.css'

export default function NavBar({handleClick}){


    return (
        <div className={s.orden}>
            
            
            <div className={s.titulo}><h1>DAMI GAMES</h1></div>
            <div className={s.crear}><Link to='/game'><button className={`${s.btnColor} ${s.btn}`}>Crear VideoJuego</button></Link></div>
            {/* <div><button className={`${s.btnColor} ${s.btn}`} onClick={e => { handleClick(e) }}>Refresh</button></div> */}
            <div className={s.search}><SearchBar  /></div>
        </div>
    );
}