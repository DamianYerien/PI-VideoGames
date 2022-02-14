import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, getPlataforms, postGame } from "../actions";
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "./CheckBox";
import s from '../Styles/CreateStyle.module.css'


function validation(input) {
    let errors = {};
    if (input.name.length < 3 || input.name.length > 40) {
        errors.name = "Nombre entre 3 y 40 caracteres"
    } if (!/^[a-zA-Z0-9 .]+$/.test(input.name)) {
        errors.name = "Nombre no puede contener caracteres especiales"
    } if (!/^\d{2,4}-\d{1,2}-\d{1,2}$/.test(input.released)) {
        errors.released = "Ingrese una fecha valida"
    } if (input.description.length > 450 || input.description.length < 5) {
        errors.description = "La descripcion debe ser entre 5 y 450 caracteres"
    } if (!/^-?\d+$/.test(input.rating)) {
        errors.rating = "El rating debe ser un numero"
    } if ((input.rating > 5 || input.rating < 1) || input.rating === typeof String) {
        errors.rating = "El rating debe ser entre 1 y 5"
    }

    return errors;

}
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
        // alert('VideJuego creado')
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




    return (
        <div className={s.container}>
            <div className={s.volver}> <Link to='/home'><button className={s.btncomun} >Volver</button></Link></div>
            <div className={s.card}>
                <h1 className={s.titulo}>Crea tu VideoJuego</h1>
                <form className={s.form} onSubmit={e => handleSubmit(e)}>
                    <div className={s.valores}>
                        <div className={s.orden}>
                            <div className={s.nombre}>
                                <label>Nombre:</label>
                                <input className={s.barra} placeholder='Ingrese un Nombre' onChange={(e) => handleInputChange(e)} type='text' value={input.name} name='name' />
                                {errors.name && (
                                    <p className={s.err}>{errors.name}</p>
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
                                <input className={s.barrafecha} onChange={(e) => handleInputChange(e)} type='text' placeholder='(AAAA-MM-DD)' value={input.released} name='released' />
                                {errors.released && (
                                    <p className={s.err}>{errors.released}</p>)}
                            </div>
                            <div className={s.rating}>
                                <label>Rating:</label>
                                <input className={s.barra} onChange={(e) => handleInputChange(e)} placeholder='Número del 1 al 5 ' type='text' value={input.rating} name='rating' />
                                {errors.rating && (
                                    <p className={s.err}>{errors.rating}</p>)}
                            </div>
                        </div>
                        <div className={s.descripcion}>
                            <label>Descripcion: </label>
                            <input className={s.barradesc} placeholder='Descripción de hasta 450 caracteres' onChange={(e) => handleInputChange(e)} type='text' value={input.description} name='description' />
                            {errors.description && (
                                <p className={s.err}>{errors.description}</p>)}
                        </div>
                    </div>
                    <div className={s.ordencheck}>
                        <div className={s.plat}> <h3 >Plataformas</h3><h6 className={s.plath6}>(Seleccione al menos 1 plataforma)</h6></div>
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
                        <div className={s.plat}> <h3>Géneros</h3><h6 className={s.plath6}>(Seleccione al menos 1 género)</h6></div>

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

                        <button
                            type="submit" className={`${s.btnColor} ${s.btn}`}
                            disabled={errors.name || errors.released || errors.description || errors.rating || !input.genres.length || !input.platforms.length}
                        >Crear Videojuego </button>
                    </div>
                </form>

            </div>
        </div>

    )

}