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
                        <a onClick={()=>paginado(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>

        </nav>
    )
}