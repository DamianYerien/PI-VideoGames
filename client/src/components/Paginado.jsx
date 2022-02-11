import React from "react";
import s from '../styles/PaginadoStyle.module.css'

export default function paginado({gamesPage, todosLosJuegos, paginado}){
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(todosLosJuegos/gamesPage); i++) {
        pageNumbers.push(i+1)
        
    }

    return(
        <div className={s.nav}>
      
            <ul className={s.container} >
                {
                    pageNumbers && pageNumbers.map(number =>(
                        
                        <p className={s.boton} onClick={()=>paginado(number)} key={number}> {number}</p>
                        
                    ))
                }
            </ul>

       
        </div>
    )
}