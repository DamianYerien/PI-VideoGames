import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames, orderByName, orderByRating, getAllGenres, filterBy } from "../actions";
import Games from "./Games";
import Paginado from "./Paginado";
import Filtered from "./Filtered";
import NavBar from "./NavBar";

import s from '../Styles/HomeStyle.module.css'

export default function Home() {
    const dispatch = useDispatch();
    const todosLosJuegos = useSelector((state) => state.juegos);
    const allGenres = useSelector(state => state.allGenres);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPage,] = useState(15);
    const indexLast = currentPage * gamesPage;
    const indexFirst = indexLast - gamesPage;
    const currentGames = todosLosJuegos.slice(indexFirst, indexLast);
    const [, setOrder] = useState('')
    const [, setOrden] = useState('')

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
        <div className={s.container} >
            <NavBar handleClick={handleClick} />
            

            <Filtered allGenres={allGenres}
                handleFilterBy={handleFilterBy} handleSort={handleSort}
                handleSortRating={handleSortRating} />

            <Paginado currentPage={currentPage} gamesPage={gamesPage}
                todosLosJuegos={todosLosJuegos.length}
                paginado={paginado} />
            <div className={s.games}>
                <Games currentGames={currentGames} />
            </div>
        </div>
    )
}
