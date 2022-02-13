import React from "react";
import s from '../Styles/FilteredStyle.module.css'
export default function Filtered({ handleSort, handleSortRating, handleFilterBy, allGenres }) {


    return (
        <div>
            <div>
                <label className={s.letra}>Ordenar por Nombre:  </label>
                <select className={s.barra} onChange={e => handleSort(e)}>
                    <optgroup label="Alfabeticamente">
                        <option value="none">Todos</option>
                        <option value="A-Z">A - Z</option>
                        <option value="Z-A">Z - A</option>
                    </optgroup>
                </select>
                <br></br>
                <br></br>
                <label className={s.letra}>Ordenar por Rating:  </label>
                <select className={s.barra} onChange={e => handleSortRating(e)}>
                    <optgroup  label="Rating">
                        <option value="none">Todos</option>
                        <option value="rat-max">Ascendente</option>
                        <option value="rat-min">Descendente</option>
                    </optgroup>
                </select>
            </div>
            <br></br>
            <div>
                <label className={s.letra}>Filtrar por   </label>
                <select className={s.barra} onChange={e => handleFilterBy(e)}>
                    <optgroup >
                        <option value="all">Todos Los Juegos</option>
                    </optgroup>
                    <label>Filtrar por origen:  </label>
                    <optgroup label="Filtrar por Origen">
                        <option value="api">API</option>
                        <option value="created">Creado</option>
                    </optgroup>
                    <optgroup label="Filtrar por Género">
                        {allGenres.map(genre => <option value={genre} key={genre}>{genre}</option>)}
                    </optgroup>
                </select >
            </div>
        </div>
    );
}