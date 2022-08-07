import React, {  useState, useEffect} from "react";
import { makeStyles,  } from "@mui/styles";
import {
  Grid,
  Paper,
  Box
  
} from "@mui/material";

// import {DownloadButton} from "../utils/Download";

// import Board from './Board'
// import Landscape from './Landscape'
// import Room from './Room'
import ImageCards from "./imageCards";
// import JimpImage from '../utils/JimpImage'
// import asyncLogParams from "../components-logging/firebaseRealtime";

// const workerJimpImage = new window.Worker('../utils/JimpImage.js')




const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden',
    minHeight: '400px',
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
  
}));

// const classes = useStyles();

function Layout() {
  

  


  return (

    // <div className={classes.root} style={{backgroundColor: '#ffffff'}} > {/*}style={{backgroundColor: '#F0E9F5'}}>*/}
    <div  style={{backgroundColor: '#ffffff', }} > {/*}style={{backgroundColor: '#F0E9F5'}}>*/}
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
      

      {/* <Grid
        container
        rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        
        spacing={1}
        // flexgrow= {3}
        justifyContent="center"
        // direction="row-reverse"
        // alignItems='flex-start' 
        // alignContent='flex-start' 

        style={{ padding: 10,  }}
        // style={{ padding: 10, alignContent:"center",  }}
      > */}
        

         <Grid  container > {/* item xs={2} sm={4} md={4}  > */}
          {/* <Grid item > */}
            <Paper
            color="secondary"
            // elevation={5} 
            style={{
              margin:75,
              borderRadius: 75,
              backgroundColor: '#eeeeee',
            }}
            >
                  <ImageCards  />
              </Paper>
            </Grid>

        </Grid>
    </Box>

    </div>
  );

}



export default Layout;


