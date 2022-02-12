import React from 'react';
import { Link } from 'react-router-dom';
import s from '../Styles/LandingStyle.module.css'


export default function LandingPage() {
    return (
        <div >
            <div className={s.container}>
                <h1>Bienvenidos a DamiGames</h1>
                <Link to='/home'>
                    <button  className={`${s.btnColor} ${s.btn}`} >Ingresar al Sitio</button>
                </Link>
            </div>
        </div>
    )
}