import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, getPlataforms, postGame } from "../actions";
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "./CheckBox";

export default function GameCreate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allGenres = useSelector(state => state.allGenres)
    const allPlatforms = useSelector(state => state.allPlatforms)
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platforms: []
    })

    useEffect(() => {
        dispatch(getAllGenres());
        dispatch(getPlataforms())
    }, [dispatch]);

    function handleCheckboxChange(e) {
        if (allGenres.includes(e.target.name)) {
            setInput({
                ...input,
                genres: e.target.checked ? [...input.genres, e.target.value] : input.genres.filter(genre => genre !== e.target.value)
            })
        } else {
            setInput({
                ...input,
                platforms: e.target.checked ? [...input.platforms, e.target.value] : input.platforms.filter(platform => platform !== e.target.value)
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postGame(input))
        alert('VideJuego creado')
        setInput({
            name: "",
            image: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platforms: []
        })
        navigate('/home', { replace: true })

    }
    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleReset() {
        setInput({
            name: "",
            image: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platforms: []
        })
    }

    function validation(input) {
        let errors = {};
        if (input.name.length < 3) {
            errors.name = "se requiere un Nombre de 3 digitos"
        } else if (!input.description) {
            errors.description = "se requiere descripcion"
        }
        return errors;
    }

    return (
        <div>
            <Link to='/home'><button>Volver</button></Link>
            <h1>Crea tu VideoJuego</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Nombre:</label>
                    <input onChange={(e) => handleInputChange(e)} type='text' value={input.name} name='name' />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>URL Imagen:</label>
                    <input onChange={(e) => handleInputChange(e)} type='text' value={input.image} name='image' />
                </div>
                <div>
                    <label>Fecha de lanzamiento:</label>
                    <input onChange={(e) => handleInputChange(e)} type='text' value={input.released} name='released' />
                </div>
                <div>
                    <label>Rating:</label>
                    <input onChange={(e) => handleInputChange(e)} type='text' value={input.rating} name='rating' />
                </div>
                <div>
                    <label>Descripcion:</label>
                    <input onChange={(e) => handleInputChange(e)} type='text' value={input.description} name='description' />
                </div>
                <div>
                    <h3>Plataformas</h3>
                    {/* <label>Plataformas:</label> */}
                    {allPlatforms.map(platforms => (
                        <CheckBox
                            key={platforms}
                            checkboxValue={platforms}
                            onChangeFunction={handleCheckboxChange}

                        />
                    ))}
                </div>
                <div>
                    {/* <label>Generos:</label> */}
                    <h3>Generos</h3>

                    {allGenres.map(genre => (
                        <CheckBox
                            key={genre}
                            checkboxValue={genre}
                            onChangeFunction={handleCheckboxChange}

                        />
                    ))}
                </div>
                <div>

                    <button onClick={() => handleReset()}
                        type="reset" >Reset</button>

                    <button onClick={e => handleSubmit(e)}
                        type="submit">Create </button>
                </div>
            </form>


        </div>

    )

}