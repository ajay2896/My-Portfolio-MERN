



import React,{ useState, useEffect } from 'react'
import { useDispatch , useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { addTimeline, deleteTimeline, getUser } from '../../actions/user';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import "./Timeline.css";


const Timeline = () => {

    const { user } = useSelector( (state) => state.user );

    const { message, error, loading } = useSelector( (state) => state.update );
    const { message: loginMessage } = useSelector( (state) => state.login );
    const dispatch = useDispatch();

    const alert = useAlert();

    // Set Title, Description, Date
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ date, setDate ] = useState("");
    
    // When Click Submit Then ADD Timeline
    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(addTimeline(title, description, date));
        dispatch(getUser());
    }

    // When Click Delete Then Delete Timeline
    const deleteHandler = async (id) => {
        await dispatch(deleteTimeline( id ));
        dispatch(getUser());
    }

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
        // Show Login Messages
    } , [ alert, error, message, dispatch, loginMessage ] )

  return (
    <div className='adminPanel'>
        <div className="adminPanelContainer">
            <Typography variant='h4'>
                <p>A</p>
                <p>D</p>
                <p style={{ marginRight: "2vmax" }}>D</p>

                <p>T</p>
                <p>I</p>
                <p>M</p>
                <p>E</p>
                <p>L</p>
                <p>I</p>
                <p>N</p>
                <p>E</p>
            </Typography>

            <form onSubmit={ submitHandler }>
                {/***********  Admin Panel Inputs Section  **********/}
                <input 
                    type="text"
                    placeholder='Title' 
                    value={title}
                    onChange={ (e) => setTitle(e.target.value) }
                    className="adminPanelInputs"
                />
                <input 
                    type="text"
                    placeholder='Description' 
                    value={description}
                    onChange={ (e) => setDescription(e.target.value) }
                    className="adminPanelInputs"
                />
                <input 
                    type="date"
                    placeholder='Date'
                    value={date}
                    onChange={ (e) => setDate(e.target.value) }
                    className="adminPanelInputs"
                />

                <Link to="/account">
                    BACK <MdKeyboardBackspace />
                </Link>

                <Button type="submit" variant="contained" disabled={loading} >
                    ADD
                </Button>

            </form>

            <div className="TimelineAdminPanel">
                {
                    user && user.timeline && user.timeline.map( (item) => (
                        <div className="TimelineCard" key={item._id}>
                            <Typography variant='h6'>{item.title}</Typography>
                            <Typography variant='body1' style={{ letterSpacing: "2px" }} >
                                {item.description}
                            </Typography>
                            <Typography variant='body1' style={{ fontWeight: 6000 }}>
                                {item.date.toString().split("T")[0]}
                            </Typography>

                            <Button
                                style={{
                                    margin: "auto",
                                    display: "block",
                                    color: "rgba(40, 40, 40, 0.7)",
                                }}
                                onClick={ () => deleteHandler(item._id) }
                            >
                                <FaTrash />
                            </Button>

                        </div>
                    ) )
                }
            </div>

        </div>
    </div>
  )
}

export default Timeline