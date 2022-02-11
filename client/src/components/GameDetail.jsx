import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { Link, useParams} from "react-router-dom";



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
    <div>
        <Link to='/home'><button>Volver</button></Link>
        {
            gameId.length &&                        
            <div>
            <img src={gameId[0].image ? gameId[0].image : imageDefault } alt="img not found" width="500px" height="350px" />
            <h2>Nombre : {gameId[0].name}</h2>
            <h2>Rating : {gameId[0].rating}</h2>
            <h3>Géneros :</h3>
            <h4>{gameId[0].genres.length ? gameId[0].genres.map(genre => <span key={genre}>{`${genre.name} `}</span>) : <></>
            }</h4>
            
            <h4>Fecha de Lanzamiento: {gameId[0].released}</h4>
            <h3>Plataformas :</h3>
            <div>
            <h4>{gameId[0].platforms.length ? gameId[0].platforms.map(p => <span key={p}>{`${p} `}</span>) : <></>
            }</h4>
            </div>
            {<p>{gameId[0].description.substr(3)}</p>}
            <br></br> 
            <br></br>
            <br></br>
            <br></br>
        </div>
            
    
        }
        </div>
)
    }


