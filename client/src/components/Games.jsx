import React from "react";
import { Link } from "react-router-dom";
import Game from "./Game";
import s from '../Styles/GameStyle.module.css'

export default function Games({currentGames}){


    return (
        currentGames && currentGames.map(e => {
            return (
                
                <div className={s.container}>
                    <Link to={"/home/" + e.id}>
                        <Game name={e.name} image={e.image} rating={e.rating} genres={e.genres} key={e.id} />
                    </Link>
                </div>
               
            );
        })
    );
}