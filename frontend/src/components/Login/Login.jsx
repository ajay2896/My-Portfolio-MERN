


import { useEffect, useState } from "react";
import { Typography, Button } from '@mui/material'
import React from 'react'
import "./Login.css"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user";
import { useAlert } from "react-alert"

const Login = () => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    // Get Dispatch
    const dispatch = useDispatch()
    // Get State from Redux State
    const { loading, message, error } = useSelector( (state) =>state.login );

    // Use Alert Hook to Show Alert
    const alert = useAlert()


    // Show Alert
    useEffect( () => {
        // Show Error if Error
        if(error){
            alert.error(error)
            dispatch({ type:"CLEAR_ERRORS" });
        }
        // Show message if success
        if(message){
            alert.success(message);
            dispatch({ type:"CLEAR_MESSAGE" });
        }
    } , [ alert, error, message, dispatch ] )

    const SubmitHandler = (e) => {
        e.preventDefault();
        // Dispatch Login
        dispatch(login(email, password));
    };


  return (
    <div className='login'>
        <div className="loginContainer">
            <form onSubmit={SubmitHandler} className="loginForm">
                <Typography variant='h4'>
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p  style={{ marginRight: "2vmax" }}>N</p>

                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
                </Typography>

                <div>
                    <input
                        required
                        type="email"
                        placeholder='Admin Email'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                    <input
                        required
                        type="password"
                        placeholder='Admin Password'
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login