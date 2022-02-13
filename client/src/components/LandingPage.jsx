import React from 'react';
import { Link } from 'react-router-dom';
import s from '../Styles/LandingStyle.module.css'


export default function LandingPage() {
    return (
        <div>
        <div className={s.indiv}> 
        </div>
            <div className={s.orden}>
                <h1 className={s.titulo}>HALOGAMES</h1>
               <div className={s.posboton}><Link to='/home'>
                    <button  className={`${s.btnColor} ${s.btn}`} >Ingresar al Sitio</button>
                </Link> </div> 
            </div>
        </div>
    )
}