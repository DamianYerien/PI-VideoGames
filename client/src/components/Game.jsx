import React from "react";
import s from '../Styles/GameStyle.module.css'

export default function Game({ name, image, genres, rating, released, plataforms, description }) {
    const imageDefault = "https://raw.githubusercontent.com/DamianYerien/SPA-App/main/videogame.png";

    return (
        
            <div className={s.card}>
                <div className={s.middleDiv}>
            <img className={s.ima}src={image ? image : imageDefault} alt="img not found"  />
            <h2 className={s.nombre}>Nombre : {name}</h2>
            <h2>Rating : {rating}</h2>
            <h3>Géneros :</h3>
            <h4>{genres.length ? genres.map(genre => <span key={genre}>{`${genre.name} `}</span>) : <></>
            }</h4>
            
            {released && <p>{released}</p> }
            {plataforms &&<h4>{plataforms.length ? plataforms.map(plataform => <span key={plataform}>{`${name} `}</span>) : <></>
            }</h4>}
            {<p>{description ? description : null}</p>}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
        </div>
        
    );
}