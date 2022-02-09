import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({handleClick}){


    return (
        <div>
            
            <Link to='/game'>Crear VideoJuego</Link>
            <h1>-------DAMI GAMES-------</h1>
            <button onClick={e => { handleClick(e) }}>Refresh</button>
        </div>
    );
}