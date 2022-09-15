
import React from 'react';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import {
    BsGithub ,
    BsInstagram ,
    BsLinkedin
} from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div>
                <Typography variant="h5">About Me</Typography>
                <Typography>
                    Hey, my name is Ajay Kumar Gupta. I am a Full-Stack Developer and I am a Fresher
                </Typography>

                <Link to="/contact" className="footerContactBtn">
                    <Typography>Contact Us</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6">Social Media</Typography>
                <a href="https://github.com/ajay2896/" target="_blank">
                    <BsGithub />
                </a>
                <a href="https://www.instagram.com/ajju_202/" target="_blank">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/ajay2896/" target="_blank">
                    <BsLinkedin />
                </a>
            </div>
        </div>
    </>
  )
}

export default Footer