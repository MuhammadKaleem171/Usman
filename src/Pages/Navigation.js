import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

export const Navigation =()=>{
    const classes = useStyles();
    return(
        <nav>
            
            <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="images/Peace.jpeg" className={classes.large} />
    </div>

            <ul className="nav-Link">

                <Link className="navstyle" to="/">
                    <li> Home</li>
                </Link>
                <Link className="navstyle"to="ContactUs">
                    <li> Contact US</li>
                </Link>
                <Link className="navstyle"to="/About">
                    <li> About me</li>
                </Link>
            </ul>
        </nav>
    )
};

