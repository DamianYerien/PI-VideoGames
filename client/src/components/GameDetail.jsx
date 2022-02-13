import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { Link, useParams} from "react-router-dom";
import s from '../Styles/DetailStyle.module.css'


export default function Detail() {
  

    const dispatch = useDispatch()
    const gameId = useSelector((state) => state.detail)
    console.log(gameId)
    // let id = props.match.params.id
    let {id} =useParams();

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    const imageDefault = "https://raw.githubusercontent.com/DamianYerien/SPA-App/main/videogame.png";

return (
    <div className={s.orden}>
       <div className={s.volver}> <Link to='/home'><button className={s.btncomun}>Volver</button></Link></div>
        {
            gameId.length &&                        
            <div className={s.card}>
            <img className={s.imagen} src={gameId[0].image ? gameId[0].image : imageDefault } alt="img not found" width="500px" height="350px" />
            <div className={s.orden}>
            <div className={s.nombre}><h2>{gameId[0].name}</h2></div>
            <div className={s.rating}><h2>Rating : {gameId[0].rating}</h2></div>
            <div className={s.fecha}><h4>Fecha de Lanzamiento: {gameId[0].released}</h4></div>
            <div className={s.generos}><h3 className={s.generos}>Géneros</h3></div>
            <div ><h4>{gameId[0].genres.length ? gameId[0].genres.map(genre => <span key={genre}>{`${genre.name} `}</span>) : <></>
            }</h4></div>
            
            <div className={s.plataformas}><h3>Plataformas :</h3></div>
            <div className={s.plataformas}>
            <div><h4>{gameId[0].platforms.length ? gameId[0].platforms.map(p => <span key={p}>{`${p} `}</span>) : <></>
            }</h4></div>
            </div>
            <div className={s.descripcion}>{gameId[0].description}</div>
            
        </div>
        </div>
            
    
        }
        </div>
        
)
    }


