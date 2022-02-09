import React from "react";

export default function Game({name, image, rating, genres}){


    return (
        <div>
            
            <img src={image} alt="img not found" width="500px" height="350px" />
            <h2>Nombre : {name}</h2>
            <h3>Rating : {rating}</h3>
            <h3>Géneros :</h3>
            <h4>{genres.length ? genres.map(genre => <span key={genre}>{`${genre.name} `}</span>) : <></>
            }</h4> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}