import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, getPlataforms, postGame } from "../actions";
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "./CheckBox";
import s from '../Styles/CreateStyle.module.css'

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
        <div className={s.container}>
          <div className={s.volver}> <Link to='/home'><button className= {s.btncomun} >Volver</button></Link></div> 
            <div className={s.card}>
                <h1 className={s.titulo}>Crea tu VideoJuego</h1>
                <form className={s.form} onSubmit={e => handleSubmit(e)}>
                    <div className={s.valores}>
                      <div className={s.orden}>
                        <div className={s.nombre}>
                            <label>Nombre:</label>
                            <input className={s.barra} placeholder='Ingrese un Nombre' onChange={(e) => handleInputChange(e)} type='text' value={input.name} name='name' />
                            {errors.name && (
                                <p>{errors.name}</p>
                            )}
                        </div>
                        <div className={s.url}>
                            <label>URL Imagen:</label>
                            <input className={s.barra} placeholder='(Opcional)' onChange={(e) => handleInputChange(e)} type='text' value={input.image} name='image' />
                        </div>
                        </div>
                        <div className={s.orden}>
                        <div className={s.fecha}>
                            <label>Fecha de lanzamiento:</label>
                            <input className={s.barrafecha} placeholder='AAAA-MM-DD' onChange={(e) => handleInputChange(e)} type='date' value={input.released} name='released' />
                        </div>
                        <div className={s.rating}>
                            <label>Rating:</label>
                            <input className={s.barra} onChange={(e) => handleInputChange(e)} type='text' value={input.rating} name='rating' />
                        </div>
                        </div>
                        
                        <div className={s.descripcion}>
                            <label>Descripcion: </label>
                            <input className={s.barradesc} onChange={(e) => handleInputChange(e)} type='text' value={input.description} name='description' />
                        </div>
                        
                    </div>
                    <div className={s.ordencheck}>
                      <div className={s.plat}> <h3 >Plataformas</h3></div> 
                        {/* <label>Plataformas:</label> */}
                        {allPlatforms.map(platforms => (
                            <CheckBox
                                key={platforms}
                                checkboxValue={platforms}
                                onChangeFunction={handleCheckboxChange}

                            />
                        ))}
                    </div>
                    <div className={s.ordencheck}>
                        {/* <label>Generos:</label> */}
                       <div className={s.plat}> <h3>Generos</h3></div>

                        {allGenres.map(genre => (
                            <CheckBox
                                key={genre}
                                checkboxValue={genre}
                                onChangeFunction={handleCheckboxChange}

                            />
                        ))}
                    </div>
                    <div className={s.footer}>

                        <button onClick={() => handleReset()}
                            type="reset" className={s.btncomun} >Reset</button>

                        <button onClick={e => handleSubmit(e)}
                            type="submit" className={`${s.btnColor} ${s.btn}`} >Crear Videojuego </button>
                    </div>
                </form>

            </div>
        </div>

    )

}