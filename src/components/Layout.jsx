import React, {  useState, useEffect} from "react";
import { makeStyles,  } from "@mui/styles";
import {
  Grid,
  Paper,
  Box
  
} from "@mui/material";
import Materials from '../collections/materials'

// import {DownloadButton} from "../utils/Download";

// import Board from './Board'
// import Landscape from './Landscape'
// import Room from './Room'
import ImageCards from "./imageCards";
// import JimpImage from '../utils/JimpImage'
// import asyncLogParams from "../components-logging/firebaseRealtime";

// const workerJimpImage = new window.Worker('../utils/JimpImage.js')

import { Outlet, Link } from 'react-router-dom';
// App.jsx




const useStyles = makeStyles(() => ({
  root: {
    width: '150px',
    margin: '25px',
    
  },

  paper: {
    
    width: "100%",
    // height: "100%",
    // height: "470px",
    // height: {sizeWindow},
    // minHeight: '100vh',
    minHeight: '430px',
    overflow: 'hidden',
    // aspectRatio: "4/5 !important",
    
  },

  img: {
    width: '150px',
  }
  
}));

// const classes = useStyles();

function Layout() {

  const classes = useStyles()


  // const decision = Object.values(Materials).filter(v => v.type === 'Category').filter(v => v.name === 'neutral').map((obj, idx) => (
  const Feelings = Object.values(Materials).filter(v => v.name === 'neutral').map((obj, idx) => (
      <div key={idx} className={classes.root} >
        <img  src={obj.imageUrl} alt={obj.name} className={classes.img} />
      </div>
  ))
  const Decision = Object.values(Materials).filter(v => v.name === 'decision').map((obj, idx) => (
      <div key={idx} className={classes.root} >
        <img  src={obj.imageUrl} alt={obj.name} className={classes.img} />
      </div>
  ))
  const Wants = Object.values(Materials).filter(v => v.name === 'Want').map((obj, idx) => (
      <div key={idx} className={classes.root} >
        <img  src={obj.imageUrl} alt={obj.name} className={classes.img} />
      </div>
  ))

  return (

    // <div className={classes.root} style={{backgroundColor: '#ffffff'}} > {/*}style={{backgroundColor: '#F0E9F5'}}>*/}
    <div  style={{backgroundColor: '#ffffff', }} > {/*}style={{backgroundColor: '#F0E9F5'}}>*/}
     <nav>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid  container > {/* item xs={2} sm={4} md={4}  > */}
            {/* <Grid item > */}
            <Paper
            color="secondary"
            // elevation={5} 
            style={{
              margin:75,
              borderRadius: 75,
              backgroundColor: '#eeeeee',
              // alignItems: 'center',
              // alignContent: 'center',
              flexDirection: 'row',
            }}
            >
                <Link to="/decision">
                  {Decision}
                </Link> 
                <Link to="/feelings">
                  {Feelings}
                  </Link> 
                <Link to="/wants">
                  {Wants}
                  </Link>
                {/* <ImageCards  /> */}
              </Paper>
            </Grid>
          </Grid>
       </Box>
      </nav>
    </div>
  );

}



export default Layout;


