import React from 'react';
import {Link, useParams} from "react-router-dom";
import p from "./Profile.module.css";


let Singlepage = () => {
    let {id} = useParams();

    return (
        <div className={p.wrapper}>
            <div className={p.box}>
                <p>Hi! My name is .... (id: {id? id: '...'}) my birth day is... and i ...</p>
                <Link className={p.button} to={'/profiles'}>log out</Link>
            </div>
        </div>
    )
}

export {Singlepage};
