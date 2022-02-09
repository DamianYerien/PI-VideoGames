import React from "react";

export default function paginado({gamesPage, todosLosJuegos, paginado}){
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(todosLosJuegos/gamesPage); i++) {
        pageNumbers.push(i+1)
        
    }

    return(
        <nav>
            <ul>
                {
                    pageNumbers && pageNumbers.map(number =>(
                        <li>
                        <p onClick={()=>paginado(number)} key={number}>{number}</p>
                        </li>
                    ))
                }
            </ul>

        </nav>
    )
}