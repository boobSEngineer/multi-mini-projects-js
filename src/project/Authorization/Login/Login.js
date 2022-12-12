import React from "react";
import {useForm} from "react-hook-form";
import l from '../Register/Register.module.css';
import c from './Login.module.css';
import paporotink from '../../../accets/paporotnik4.jpg';
import {Link, NavLink} from "react-router-dom";

let activeNav = {
    'color': "#207ff8",
}
let setActive = ({isActive}) => isActive ? activeNav : {};

let Login = () => {
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({mode: "onBlur"});

    const registerOption = {
        emailAddress: {required: 'Empty field!'},
        password: {required: 'Empty field!', minLength: {value: 3, message: 'Min 3 symbols'}},
    };

    let processForm = (data) => {
        alert(JSON.stringify(data));
        reset(data);
    };


    return (
        <div className={l.wrapper}> {/*Настраивает экран (центрирует и крепит)*/}
            <div className={l.box}> {/*Настраивает экран для флекса*/}
             <div className={l.box_content}> {/*Делаем элемент для контента, делим на две стороны*/}
                    <form className={l.content_login} onSubmit={handleSubmit(processForm)}>
                        <div className={l.title}>
                            <NavLink to="/login"  style={setActive}>Sign in</NavLink> | <NavLink to="/register" style={setActive} >Sign up</NavLink>
                        </div>
                        <input className={l.input} placeholder='Email Address'
                               {...register('emailAddress', registerOption.emailAddress)}/>

                        <div className={l.error}>{errors?.emailAddress &&
                        <p> {errors?.emailAddress?.message || 'Error!'}</p>}
                        </div>
                        <input className={c.input_end} type='password' placeholder='Password'
                               {...register('password', registerOption.password)}/>

                        <div className={l.error}>{errors?.password &&
                        <p> {errors?.password?.message || 'Error!'}</p>}
                        </div>
                        <input className={l.button} type='submit' disabled={!isValid} value='Submit'/>
                    </form>
                    <img className={l.img} src={paporotink}/>
                </div>


            </div>
        </div>
    )
};

export default Login;
