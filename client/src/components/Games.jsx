import React from "react";
import { Link } from "react-router-dom";
import Game from "./Game";

export default function Games({currentGames}){


    return (
        currentGames && currentGames.map(e => {
            return (
                <fragment>
                    <Link to={"/home/" + e.id}>
                        <Game name={e.name} image={e.image} genres={e.genres} rating={e.rating} key={e.id} />
                    </Link>
                </fragment>
            );
        })
    );
}