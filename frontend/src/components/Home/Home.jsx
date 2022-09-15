


import React, { useEffect } from 'react'
import * as THREE from "three"
import moonImage from '../../Images/moon.jpg';
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg"; 
import { Typography } from "@mui/material";
import TimeLine from '../TimeLine/TimeLine';
import { Link } from "react-router-dom";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs
} from "react-icons/si"
import "./Home.css";
import { MouseOutlined } from '@mui/icons-material';

const Home = ({ timelines, skills }) => {


  // Animate Function
    useEffect(() => {

      // Texture Loader
      const textureLoader =  new THREE.TextureLoader();

      // Texture
      const moonTexture = textureLoader.load(moonImage);
      const venusTexture = textureLoader.load(venusImage);
      const spaceTexture = textureLoader.load(spaceImage);

        // Camera
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
        camera.position.set(4, 4, 8);

        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGL1Renderer({ canvas });

        // Moon
        const moonGeometry = new THREE.SphereGeometry(3, 64, 64);
        const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture })
        const moon = new THREE.Mesh( moonGeometry, moonMaterial);

        // Venus
        const venusGeometry = new THREE.SphereGeometry(4, 64, 64);
        const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture })
        const venus = new THREE.Mesh( venusGeometry, venusMaterial);
        venus.position.set(8, 5, 5);

        const pointLight = new THREE.PointLight( 0xffffff,1);
        const pointLight2 = new THREE.PointLight( 0xffffff,0.1);

        pointLight.position.set(8, 5, 5);
        pointLight.position.z = 10;
        pointLight2.position.set(-8, -5, -5);

        // Scene
        const scene = new THREE.Scene()
        scene.add(moon);
        scene.add(venus);
        scene.add(pointLight);
        scene.add(pointLight2);
        scene.background = spaceTexture;

        const constSpeed = 0.01;
        window.addEventListener("mousemove", (e) => {
          if( e.clientX <= window.innerWidth / 2 ){
            moon.rotation.x -= constSpeed;
            moon.rotation.y += constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y += constSpeed;
          }

          if( e.clientX > window.innerWidth / 2 ){  
            moon.rotation.x -= constSpeed;
            moon.rotation.y -= constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y -= constSpeed;
          }

          if( e.clientY > window.innerHeight / 2 ){
            moon.rotation.x -= constSpeed;
            moon.rotation.y -= constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y -= constSpeed;
          }

          if( e.clientY <= window.innerHeight / 2 ){
            moon.rotation.x -= constSpeed;
            moon.rotation.y -= constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y -= constSpeed;
          }
        })

        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.001;
            venus.rotation.y += 0.001;
            renderer.setSize( window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        };

        animate();

        // Scrolling
        return (window.addEventListener("scroll", (e) => {
          camera.rotation.z = window.scrollY * 0.01;
          camera.rotation.y = window.scrollY * 0.03;

          const skillBox = document.getElementById("homeSkillsBox");

          if(window.scrollY > 1500 ){
            skillBox.style.animationName = "homeSkillsBoxAnimationOn"
          }
          else{
            skillBox.style.animationName = "homeSkillsBoxAnimationOff"
          }
        }));

    }, [] )

  return (
    <div className='home'>

        <canvas className='homeCanvas'></canvas>


        <div className="homeCanvasContainer">
          <Typography variant='h1'>
            <p>A</p>
            <p>J</p>
            <p>A</p>
            <p>Y</p>
            <p>G</p>
            <p>U</p>
            <p>P</p>
            <p>T</p>
            <p>A</p>
          </Typography>

          <div className="homeCanvasBox">
            <Typography variant='h2'>DESIGNER</Typography>
            <Typography variant='h2'>DEVELOPER</Typography>
            <Typography variant='h2'>CONTENT CREATER</Typography>
          </div>

          <Link to="/projects" className='viewWork'>VIEW WORK</Link>

        </div>  

          <div className="homeScrollBtn">
            <MouseOutlined />
          </div>

        <div className="homeContainer">
          <Typography variant='h3'>TIMELINE</Typography>
          <TimeLine timelines={timelines}/>
        </div>

        <div className="homeSkills">
          <Typography variant='h3'>SKILLS</Typography>
          <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces1">
              <img
                src={skills.image1.url}
                alt='Face1'
              />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces2">
              <img
                src={skills.image2.url}
                alt='Face2'
              />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces3">
              <img
                src={skills.image3.url}
                alt='Face3'
              />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces4">
              <img
                src={skills.image4.url}
                alt='Face4'
              />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces5">
              <img
                src={skills.image5.url}
                alt='Face5'
              />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces6">
              <img
                src={skills.image6.url}
                alt='Face6'
              />
            </div>
          </div>

          <div className="cubeShadow"></div>

          <div className="homeSkillsBox" id="homeSkillsBox">
            <SiCplusplus />
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiMongodb />
            <SiExpress />
            <SiReact />
            <SiNodedotjs />
            <SiThreedotjs />
          </div>
        </div>
        
    </div>
  )
}

export default Home