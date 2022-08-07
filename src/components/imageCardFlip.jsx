import React, {useState, useEffect, useCallback, Fragment } from "react";

import Materials from '../collections/materials'
import GetKeyByValue from '../utils/getKeyByValue'

import {  Grid, Paper, Box, Button, Card, CardActionArea, CardMedia, Typography   } from "@mui/material";
import ReactCardFlip from 'react-card-flip';
import { height } from "@mui/system";



export default function ImageButtonFlip(props) {
  const { name, source, audioSrc} = props;

  const [isFlippy, setIsFlippy] = useState(false);

//   console.log('name, source, audioSrc', name, source, audioSrc)



  const handleClick = (e) => {
    e.preventDefault();
    setIsFlippy(!isFlippy);

  }


 
const ImageButton = ({  source, audioSrc }) => (
    
        <Card onClick={handleClick} sx={{  height:250,  verticalAlign: 'middle',  justifyContent: 'center', alignItems: 'center', display:'flex',}}>
        {/* <Card onClick={handleClick} sx={{ maxWidth: 345, height:250 }}> */}
            {/* <Fragment> */}
            <div style={{ padding: 10, 
                }}>
                <CardActionArea sx={{  alignItems:"center"}}>
                    <CardMedia
                        component="img"
                        // height="140"
                        image={source}
                        alt={name}
                    />
                    <CardMedia
                        component="audio"
                        autoPlay 
                        // height="140"
                        src={audioSrc}
                    />
                </CardActionArea>
              </div>
            {/* </Fragment> */}
        </Card>
    
)

const ImageButtonFlip = ({  name,  }) => (
    
    // <Grid item
    //     flexgrow= {1}
    //     style={{ padding: 10, alignContent:"center",  }}
    //   >

      <Card onClick={handleClick} sx={{ height:250, verticalAlign: 'middle' }}>
      {/* <Card onClick={handleClick} sx={{ maxWidth: 345, height:250 }}> */}
      <div style={{paddingTop: '50%'}}>
        <Typography variant="headline" component="h1" align="center"  textAlign= 'center'>
            {name}
        </Typography>
        </div>
      </Card>

//   </Grid>
)



// Object.values(material).map((choice, idx) => {( console.log( choice, idx))})
   
 
// console.log("MaterialMenu", name)

  const menuItems = (name, source) => (
    // console.log("MaterialMenu", name)
    

      <div  onClick={handleClick} 
      style={{ height:'250px', width: '250px', margin: '30px' }}
      >
      {/* <div key={idx} onClick={handleClick}> */}

          <ReactCardFlip isFlipped={isFlippy} flipDirection="vertical">

            <ImageButton 
                // width='250px' 
                // height='250px' 
                alt={name}
                name={name}
                source={source} 
                audioSrc={audioSrc}
            />

            <ImageButtonFlip 
                // width='150px' 
                // hieght='150px' 
                name={name}
            />

          </ReactCardFlip>  
      </div>
    )
    


  return (
    
    <div >
        {/* <Grid  item 
            xs={6}
            // flexgrow = {3}
            // style={{padding: '5px', width:'250px', height:'250px', alignContent:"center"}}
            > */}

              {menuItems(name, source)}  

        {/* </Grid> */}
    </div>
    
  );

}
