import React from "react";

export default function Game({name, image, rating}){
    return (
        <div>
            
            <img src={image} alt="img not found" width="450px" height="350px" />
            <h2>{name}</h2>
            <h3>{rating}</h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}