import React from "react";
import {useForm} from "react-hook-form";
import l from './Register.module.css';
import paporotink from '../../../accets/paporotnik2.jpg'
import {Link, NavLink} from "react-router-dom";


let activeNav = {
    'color': "#207ff8",
}
let setActive = ({isActive}) => isActive ? activeNav : {};


let Register = () => {
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
        firstName: {required: 'Empty field!', minLength: {value: 5, message: 'Min 5 symbols'}},
        emailAddress: {required: 'Empty field!'},
        password: {required: 'Empty field!', minLength: {value: 3, message: 'Min 3 symbols'}},
        dataOfBirthDay: {required: true},
        rules: {required: true},
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
                        <input className={l.input} placeholder="Email Address"
                               {...register('emailAddress', registerOption.emailAddress)}/>

                        <div className={l.error}>{errors?.emailAddress &&
                        <p> {errors?.emailAddress?.message || "Error!"}</p>}
                        </div>
                        <input className={l.input} placeholder="First Name"
                               {...register('firstName', registerOption.firstName)}/>

                        <div className={l.error}>{errors?.firstName &&
                        <p> {errors?.firstName?.message || "Error!"}</p>}
                        </div>
                        <input className={l.input} type="password" placeholder="Password"
                               {...register('password', registerOption.password)}/>

                        <div className={l.error}>{errors?.password &&
                        <p> {errors?.password?.message || "Error!"}</p>}
                        </div>

                        <div className={l.block}>
                            <input className={l.data} type='date' {...register("dataOfBirthDay", registerOption.dataOfBirthDay)}/>

                            <select>
                                <option defaultValue="selected"> Male </option>
                                <option defaultValue=""> Female </option>
                                <option defaultValue=""> etc </option>
                            </select>

                        </div>


                        <p className={l.text}><input type='checkbox' {...register('rules', registerOption.rules)}/> I accept the terms and conditions for sign up to this service, and hereby confirm I have read the privacy police.</p>


                        <input className={l.button} type='submit' disabled={!isValid} value='Submit'/>
                    </form>
                    <img className={l.img} src={paporotink}/>
                </div>


            </div>
        </div>
    )
};

export default Register;
