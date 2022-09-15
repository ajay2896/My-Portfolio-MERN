

import React from 'react'
import { AiOutlineProject } from 'react-icons/ai';
import { Delete } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { FaRegSmileWink } from "react-icons/fa"
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";
import "./Projects.css"

export const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    tecnologies,
    isAdmin = false,
    id ,
}) => {

    const dispatch = useDispatch();

    const deleteHandler = async (id) => {
        await dispatch(deleteProject(id));
        dispatch(getUser());
    };

    return(
        <>
            <a href={url} className="projectCard" target="black">
                <div>
                    <img src={projectImage} alt='Project'/>
                    <Typography variant='h5'>{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant='h4'>About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant='h6'>Tech Stack: {tecnologies}</Typography>
                </div>
            </a>

            {
                isAdmin && (
                    <Button 
                        onClick={ () => deleteHandler(id) }
                        style={{ color:"rgba(40,40,40,0.7)"}}
                    >
                        <Delete />
                    </Button>
                )
            }
        </>
    )
}

const Projects = ({ projects }) => {

return (
    <div className='projects'>
        <Typography variant='h3'>
            Projects <AiOutlineProject /> 
        </Typography>
        <div className="projectsWrapper">
            {
                projects.map( (item) => (
                    <ProjectCard 
                        key={item._id}
                        id={item._id}
                        url={item.url}
                        projectImage={item.image.url}
                        projectTitle={item.title}
                        description={item.description}
                        tecnologies={item.techStack}
                    />
                ))
            }
        </div>

        <Typography variant='h3' style={{ font: "100 1.2rem 'Ubuntu Mono'"}} >
            All The Projects Shown Above Are Made By Me <FaRegSmileWink />
        </Typography>

    </div>
  )
}

export default Projects