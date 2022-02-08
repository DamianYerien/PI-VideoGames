import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../actions";
import { Link } from "react-router-dom";
import Game from "./Game";
import { useState } from "react";
import Paginado from "./Paginado";

export default function Home() {
    const dispatch = useDispatch();
    const todosLosJuegos = useSelector((state) => state.juegos);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPage, setGamesPage] = useState(15);
    const indexLast = currentPage * gamesPage;
    const indexFirst = indexLast - gamesPage;
    const currentGames = todosLosJuegos.slice(indexFirst, indexLast);


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getGames())
    }, [dispatch])


    function handleClick(e) {
        e.preventDefault();
        dispatch(getGames());
    }
    return (

        <div>
            <Link to='/videogame'>Crear VideoJuego</Link>
            <h1>-------DAMI GAMES-------</h1>
            <button onClick={e => { handleClick(e) }}>Refresh</button>
            <div>
                <div>
                    <label>Ordenar por:  </label>
                    <select>
                        <option value="none">Sin Ordenar</option>
                        <optgroup label="Alfabeticamente">
                        <option value="A-Z">Ascendente</option>
                        <option value="Z-A">Descendente</option>
                        </optgroup>
                        <optgroup label="Rating">
                        <option value="rat-max">Ascendente</option>
                        <option value="rat-min">Descendente</option>
                        </optgroup>
                    </select>
                </div>

                <div>
                    <label>Filtrar por:  </label>
                    <select>
                    <optgroup label="Filtrar">
                        <option value="genres">Por Género</option>
                        </optgroup>
                        <optgroup label="Existente o Creado">
                        <option value="all">Todos</option>
                        <option value="api">API</option>
                        <option value="user">Creado</option>
                        </optgroup>
                        
                    </select>
                    <Paginado gamesPage={gamesPage} 
                    todosLosJuegos ={todosLosJuegos.length} 
                    paginado={paginado}
                     />
                    { currentGames && currentGames.map(e => {
                            return (
                                <fragment>
                                    <Link to={"/home/" + e.id}>
                                        <Game name={e.name} image={e.image} rating={e.rating} key={e.id} />
                                    </Link>
                                </fragment>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )

}
