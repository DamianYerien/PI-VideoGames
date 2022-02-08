import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames,  orderByName, orderByRating, getAllGenres, filterBy } from "../actions";
import { Link } from "react-router-dom";
import Game from "./Game";
import { useState } from "react";
import Paginado from "./Paginado";

export default function Home() {
    const dispatch = useDispatch();
    const todosLosJuegos = useSelector((state) => state.juegos);
    const allGenres = useSelector(state => state.allGenres);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPage, setGamesPage] = useState(4);
    const indexLast = currentPage * gamesPage;
    const indexFirst = indexLast - gamesPage;
    const currentGames = todosLosJuegos.slice(indexFirst, indexLast);
    const [order, setOrder] = useState('')
    const [orden, setOrden] = useState('')
    


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getGames())
        dispatch(getAllGenres())
    }, [dispatch])


    function handleClick(e) {
        e.preventDefault();
        dispatch(getGames());
    }

    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleSortRating(e) {
        e.preventDefault();
        dispatch(orderByRating(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleFilterBy(e) {
        e.preventDefault();
        dispatch(filterBy(e.target.value));
        setCurrentPage(1)
        // setFiltrado(`Ordenado ${e.target.value}`)
    }

    return (

        <div>
            <Link to='/videogame'>Crear VideoJuego</Link>
            <h1>-------DAMI GAMES-------</h1>
            <button onClick={e => { handleClick(e) }}>Refresh</button>
            <div>
                <div>
                    <label>Ordenar por Nombre:  </label>
                    <select onChange={e => handleSort(e)}>
                        <optgroup label="Alfabeticamente">
                            <option value="none">Todos</option>
                            <option value="A-Z">A - Z</option>
                            <option value="Z-A">Z - A</option>
                        </optgroup>
                    </select>
                    <br></br>
                    <br></br>
                    <label>Ordenar por Rating:  </label>
                    <select onChange={e => handleSortRating(e)}>
                        <optgroup label="Rating">
                            <option value="none">Todos</option>
                            <option value="rat-max">Ascendente</option>
                            <option value="rat-min">Descendente</option>
                        </optgroup>
                    </select>
                </div>
                <br></br>
                <div>
                    <label>Filtrar por   </label>
                    <select onChange={e => handleFilterBy(e)}>
                        <optgroup >
                            <option value="all">Todos Los Juegos</option>
                        </optgroup>
                        <optgroup label="Género">
                            {allGenres.map(genre => <option value={genre} key={genre}>{genre}</option>)}
                        </optgroup>
                        <label>Filtrar por origen:  </label>
                        <optgroup label="Existente o Creado">
                            <option value="api">API</option>
                            <option value="created">Creado</option>
                        </optgroup>
                    </select >
                    <Paginado gamesPage={gamesPage}
                        todosLosJuegos={todosLosJuegos.length}
                        paginado={paginado}
                    />
                    {currentGames && currentGames.map(e => {
                        return (
                            <fragment>
                                <Link to={"/home/" + e.id}>
                                    <Game name={e.name} image={e.image} genres={e.genres} rating={e.rating} key={e.id} />
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
