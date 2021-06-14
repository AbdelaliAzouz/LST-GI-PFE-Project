import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios'


//Pour le bouton onlign sur l'avatar
const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
 
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  //Fin

const Sidebar = () => {  
    const classes = useStyles();

    const [ userLastName, setUserLastName ] = useState("")
    const [ userFirstName, setFirstName ] = useState("")
    const [ userEmail, setEmail ] = useState("")

    Axios.defaults.withCredentials = true;

  useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response) => {
          setUserLastName(response.data.user[0].nom)
          setFirstName(response.data.user[0].prenom)
          setEmail(response.data.user[0].email_institu)
      })
  }
, [])


    return(
            <div className="sidebar">
                <div className="Sidebar_Top">
                    <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg" alt="Background" />
                    {/* <Avatar className="sidebar_avatar " /> */}
                      <div className={classes.root}>
                            <StyledBadge
                                overlap="circle"
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                                }}
                                variant="dot"
                            >
                                <Avatar alt="A" src="/" />
                            </StyledBadge>
                        </div>
                    <h3>{userFirstName} {userLastName}</h3>
                    <h5>{userEmail}</h5>
                </div>
            <div className="sidebar_stats">
            <Link to='/Etablissements'>
                <div className="sidebar_stat">
                    <p>Etablissements</p>
                </div>
                </Link>
                <div className="sidebar_stat">
                    <p>Départements</p>
                </div>
                <Link to='/Labos'>
                  <div className="sidebar_stat">
                      <p>Labos</p>
                  </div>
                </Link>
            </div>
                <div className="sidebar_bottom">
                    <h6>Vos Articles</h6>
                    <a href="/Accueil">Article 1</a>
                    <a href="/Accueil">Article 2</a>
                    <a href="/Accueil">Article 3</a>
                    <a><span>Ajouter une article</span><i className="fas fa-plus"></i></a>
                </div>
            </div>
        );
};

export default Sidebar;
