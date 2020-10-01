import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';



export default class  ImageAvatars  extends React.Component {
    render(){
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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="images/Peace.jpeg" className={classes.large} />
    </div>
  );
}
}
