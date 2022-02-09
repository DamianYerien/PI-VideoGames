import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres,  } from "../actions";
import { Link, useHistory } from "react-router-dom";


export default function GameCreate(){
const dispatch = useDispatch();
const allGenres = useSelector(state => state.allGenres)

const [input, SetInput] = useState({

        name :"",
        image : "",
        description : "",
        released : "",
        rating: "",
        

})

useEffect(()=> {
    dispatch(getAllGenres());
}, []);

return(
<div>
<Link to='/home'><button>Volver</button></Link>
<h1>Crea tu VideoJuego</h1>
<form>
    <div>
        <label>Nombre:</label>
        <input type='text' value= {input.name} name='name'/>
    </div>
    <div>
        <label>URL Imagen:</label>
        <input type='text' value= {input.image} name='image'/>
    </div>
    <div>
        <label>Fecha de lanzamiento:</label>
        <input type='text' value= {input.released} name='released'/>
    </div>
    <div>
        <label>Rating:</label>
        <input type='text' value= {input.rating} name='rating'/>
    </div>
    <div>
        <label>Plataformas:</label>
        <input type='text' value= {input.platforms} name='platforms'/>
    </div>
    <div>
        <label>Generos:</label>
        <input type='text' value= {input.genres} name='genres'/>
    </div>
    <div>
        <label>Descripcion:</label>
        <input type='text' value= {input.description} name='description'/>
    </div>
</form>


</div>

)

}