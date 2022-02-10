import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { Link } from "react-router-dom";


export default function Detail(props){
    console.log(props)

    const dispatch =useDispatch()
    const gameId = useSelector((state)=>state.detail)

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    }, [dispatch])
}