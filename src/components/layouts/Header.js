import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import scg from './iconheader/scg.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"white",
    left:0,
    right:0,
    top:0,
  },
  paper: {
    
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"Blue",
    margin:"auto",
    color:"white"
  },
  
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={1}>
        <Grid item xs="1">
           
        </Grid>
        <Grid item xs="3">
        <div>
          <img src={scg} style={{margin:"20px 0px 20px -30px"}} alt=""/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
