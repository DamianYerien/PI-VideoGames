import React from "react";
import s from '../Styles/GameStyle.module.css'

export default function Game({ name, image, genres, rating, released, plataforms, description }) {
    const imageDefault = "https://raw.githubusercontent.com/DamianYerien/SPA-App/main/videogame.png";

    return (

        <div className={s.card}>
            <div className={s.middleDiv}>
                <img className={s.ima} src={image ? image : imageDefault} alt="img not found" />
                <div className={s.orden}><h2 className={s.nombre}> {name}</h2>
                    <div className={s.rating}>  <h3 className={s.titulorat}>Rating : {rating}</h3></div>
                    <h3 className={s.generos} data-testid="genero">Géneros :</h3>
                    <h4 className={s.genero}>{genres ? genres.map(genre => 
                    <span className={s.span} key={genre}>{genre.name}</span>) : <></>}</h4>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}