


import { useState, useEffect } from "react";
import { Button, Typography } from '@mui/material';
import { AiOutlineProject } from 'react-icons/ai';
import { MdTimeline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import "./AdminPanel.css"
import { logout, updateUser } from "../../actions/user";
import { useAlert } from "react-alert";

const AdminPanel = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { message:loginMessage } = useSelector( (state) => state.login );
    const{ message, error, loading } = useSelector( (state) => state.update ); 

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ skills, setSkills ] = useState({});
    const [ about, setAbout ] = useState({});

    // Handle Submit Button Form
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser( name, email, password, skills, about ));
    }

    // Handle Logout Button
    const logoutHandler = () => {
        dispatch(logout());
    }

    // Handle About Images
    const handleAboutImage = (e) => {
        const file = e.target.files[0];

        // Read File
        const Reader = new FileReader();

        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if( Reader.readyState === 2 ){
                setAbout({ ...about, avatar: Reader.result });
            }
        };
    }

    // Handle Images
    const handleImages = ( e, value ) => {

        const file = e.target.files[0];

        // Read File
        const Reader = new FileReader();

        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if( Reader.readyState === 2 ){
                if( value === 1 ){
                    setSkills({ ...skills, image1: Reader.result });
                }
                if( value === 2 ){
                    setSkills({ ...skills, image2: Reader.result });
                }
                if( value === 3 ){
                    setSkills({ ...skills, image3: Reader.result });
                }
                if( value === 4 ){
                    setSkills({ ...skills, image4: Reader.result });
                }
                if( value === 5 ){
                    setSkills({ ...skills, image5: Reader.result });
                }
                if( value === 6 ){
                    setSkills({ ...skills, image6: Reader.result });
                }
            }
        };
    };

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
        // Show loginMessage if success
        if(loginMessage){
            alert.success(loginMessage);
            dispatch({ type:"CLEAR_MESSAGE" });
        }
    } , [ alert, error, message, dispatch, loginMessage ] )

  return (
    <div className='adminPanel'>
        <div className="adminPanelContainer">
            <Typography variant='h4'>
                <p>A</p>
                <p>D</p>
                <p>M</p>
                <p>I</p>
                <p style={{ marginRight: "2vmax" }}>N</p>

                <p>P</p>
                <p>A</p>
                <p>N</p>
                <p>E</p>
                <p>L</p>
            </Typography>

            <form onSubmit={ submitHandler }>
                {/***********  Admin Panel Inputs Section  **********/}
                <input 
                    type="text"
                    placeholder='Name' 
                    value={name}
                    onChange={ (e) => setName(e.target.value) }
                    className="adminPanelInputs"
                />
                <input 
                    type="email"
                    placeholder='Email' 
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                    className="adminPanelInputs"
                />
                <input 
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                    className="adminPanelInputs"
                />

                {/***********  Admin Panel Skill Section  **********/}
                <div className="adminPanelSkill">
                    <div>
                        <Typography>SKILL 1</Typography>
                        <input 
                            className='adminPanelFileUpload'
                            type="file"
                            onChange={ (e) => handleImages(e, 1) }
                            accept="image/*" 
                        />
                    </div>

                    <div>
                        <Typography>SKILL 2</Typography>
                        <input 
                            className='adminPanelFileUpload'
                            type="file"
                            onChange={ (e) => handleImages(e, 2) }
                            accept="image/*" 
                        />
                    </div>

                    <div>
                        <Typography>SKILL 3</Typography>
                        <input 
                            className='adminPanelFileUpload'
                            type="file"
                            onChange={ (e) => handleImages(e, 3) }
                            accept="image/*" 
                        />
                    </div>

                    <div>
                        <Typography>SKILL 4</Typography>
                        <input 
                            className='adminPanelFileUpload'
                            type="file"
                            onChange={ (e) => handleImages(e, 4) }
                            accept="image/*" 
                        />
                    </div>

                    <div>
                        <Typography>SKILL 5</Typography>
                        <input 
                            className='adminPanelFileUpload'
                            type="file"
                            onChange={ (e) => handleImages(e, 5) }
                            accept="image/*" 
                        />
                    </div>

                    <div>
                        <Typography>SKILL 6</Typography>
                        <input 
                            className='adminPanelFileUpload'
                            type="file"
                            onChange={ (e) => handleImages(e, 6) }
                            accept="image/*" 
                        />
                    </div>
                </div>

                {/***********  Admin Panel About Section  **********/}
                <div className="adminPanelAbout">
                    <fieldset>
                        <legend>About</legend>
                        <input
                            type="text"
                            placeholder="Name"
                            value={about.name}
                            onChange={ (e) => setAbout({ ...about, name:e.target.value }) }
                            className="adminPanelInputs"
                        />
                        <input
                            type="text"
                            placeholder="Title"
                            value={about.title}
                            onChange={ (e) => setAbout({ ...about, title:e.target.value }) }
                            className="adminPanelInputs"
                        />
                        <input
                            type="text"
                            placeholder="Subtitle"
                            value={about.subtitle}
                            onChange={ (e) => setAbout({ ...about, subtitle:e.target.value }) }
                            className="adminPanelInputs"
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={about.description}
                            onChange={ (e) => setAbout({ ...about, description:e.target.value }) }
                            className="adminPanelInputs"
                        />
                        <input
                            type="text"
                            placeholder="Quote"
                            value={about.quote}
                            onChange={ (e) => setAbout({ ...about, quote:e.target.value }) }
                            className="adminPanelInputs"
                        />
                        <input
                            type="file"
                            placeholder="Choose Avatar"
                            onChange={ handleAboutImage }
                            className="adminPanelInputs"
                            accept="image/*"
                        />
                    </fieldset>
                </div>

                <Link to="/admin/timeline">
                    TIMELINE <MdTimeline />
                </Link>

                <Link to="/admin/project">
                    PROJECTS <AiOutlineProject />
                </Link>

                <Button type="submit" variant="contained" disabled={loading} >
                    Update
                </Button>

            </form>

            {/********  LogOut BUtton  ********/}
            <Button 
                variant='contained'
                color='error'
                style={{ display:"black", margin:"4vmax auto", textAlign:"center" }}
                onClick={ logoutHandler }
            >
                LOGOUT
            </Button>
        </div>
    </div>
  )
}

export default AdminPanel