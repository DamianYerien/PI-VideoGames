import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames, orderByName, orderByRating, getAllGenres, filterBy } from "../actions";
import { Link } from "react-router-dom";
import Games from "./Games";
import { useState } from "react";
import Paginado from "./Paginado";
import Filtered from "./Filtered";

export default function Home() {
    const dispatch = useDispatch();
    const todosLosJuegos = useSelector((state) => state.juegos);
    const allGenres = useSelector(state => state.allGenres);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPage, setGamesPage] = useState(15);
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
        
    }

    return (
        <div>
            <Link to='/videogame'>Crear VideoJuego</Link>
            <h1>-------DAMI GAMES-------</h1>
            <button onClick={e => { handleClick(e) }}>Refresh</button>
            <div>
                <div>
                    <Filtered allGenres={allGenres} 
                    handleFilterBy={handleFilterBy} handleSort={handleSort} 
                    handleSortRating={handleSortRating}/>
                    
                    <Paginado gamesPage={gamesPage}
                        todosLosJuegos={todosLosJuegos.length}
                        paginado={paginado} />
                    
                    <Games  currentGames={currentGames}/>
                </div>
            </div>
        </div>
    )
}
