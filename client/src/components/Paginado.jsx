import React from "react";
import s from '../Styles/PaginadoStyle.module.css'

export default function paginado({gamesPage, todosLosJuegos, paginado, currentPage}){
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(todosLosJuegos/gamesPage); i++) {
        pageNumbers.push(i+1)
        
    }

    return(
        <div className={s.nav}>
      
            <ul className={s.container} >
                {
                    pageNumbers && pageNumbers.map(number =>(
                        
                        <p className={`${number === currentPage? s.active : s.boton} `} onClick={()=>paginado(number)} key={number}> {number}</p>
                        
                    ))
                }
            </ul>

       
        </div>
    )
}