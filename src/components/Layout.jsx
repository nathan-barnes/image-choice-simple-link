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
    height: "470px",
    // height: {sizeWindow},
    // minHeight: '100vh',
    minHeight: '430px',
    overflow: 'hidden',
    aspectRatio: "4/5 !important",
    
  },
  popover: {
    pointerEvents: 'none',
    width: "150px",
    height: "70px",
    
  },
  
}));

// const classes = useStyles();

function Layout() {
  // console.log('Layout')
  const [material, setMaterial] = useState({
    zPrime: "Pizza",
    ZSec: "chicken", 
  });
  const [matScene, setMatScene] = useState(false);

//   const [download, setDownload] = useState(false);
//   const [limitDowload, setLimitDowload] = useState(false);
//   const [sceneIncrement, setSceneIncrement] = useState(0);
//   const [spinner, setSpinner] = useState(false);
//   const [UrlConfig, setUrlConfig] = useState('');

  


  return (

    // <div className={classes.root} style={{backgroundColor: '#ffffff'}} > {/*}style={{backgroundColor: '#F0E9F5'}}>*/}
    <div  style={{backgroundColor: '#ffffff', width: "100%", hieght: "100%"}} > {/*}style={{backgroundColor: '#F0E9F5'}}>*/}


      <Grid
        container
        spacing={4}
        flexgrow= {3}
        justifyContent="center"
        direction="row-reverse"
        
        style={{ padding: 10, alignContent:"center",  }}
      >
        

        <Grid container item xs={10} sm={4} >
          <Grid item>
            <Paper
            color="secondary"
            elevation={5} 
            style={{
              borderRadius: 75,
              backgroundColor: '#eeeeee',
            }}
            >
                {/* <Box sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7],
                    },
                    }}
                  > */}
                  <ImageCards material={material}  />
                {/* </Box> */}
              </Paper>
            </Grid>
        </Grid>

        
        


{/* bottom menues */}
      {/* <Grid container 
      justifyContent="center"
      direction="row" 
      // justifyContent="flex-end"
      flexgrow = {3}
      spacing={2} 
      style={{ padding: 10, 
        // background: 'black',
       }}
       >

          <Grid  item  
          
          flexgrow = {3}
          flexwrap="wrap"
          style={{padding: '10px', alignItems: 'center', 
            }}>
            
            <Paper
              color="secondary"
              elevation={5} 
              style={{
                borderRadius: 75,
                backgroundColor: '#eeeeee',
                
              }}
              >
              

                <MaterialMenu 
                setMaterial={setMaterial} 
                material={material} 
                setMatScene={setMatScene} //Landscape trigger
                asyncLogParams={asyncLogParams}
                setUrlConfig={setUrlConfig}
                />
                
            </Paper>

          </Grid>


          <Grid container item xs={2} sm={2} 
          style={{  padding: '10px 1rem 10px 10px', alignContent: 'center',  }} >
          <DownloadButton setDownload={setDownload} spinner={spinner} setLimitDowload={setLimitDowload}/>
          </Grid >
        </Grid > */}

      </Grid>
      {/* </Grid> */}

    </div>
  );

}



export default Layout;


