import {AuthContext} from './../context/auth.context';
import { ThemeContext } from '../context/theme.context';
import { useContext } from 'react';
import React from 'react';

function ProjectCard(props) {

  const { loggedInUser } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext)

  return (
    <div className={"ProjectCard" + theme}>
      <h3>{props.project.name}</h3>
      <p>{props.project.technologies}</p>
    </div>
  )
}

export default ProjectCard;