import React, {useState, useEffect, useCallback } from "react";

import Materials from '../collections/materials'
import GetKeyByValue from '../utils/getKeyByValue'

import {  Grid, Paper, Box, Button, Card, CardActionArea, CardMedia, Typography   } from "@mui/material";
import ReactCardFlip from 'react-card-flip';

let zmatPrim 
let zmatSec


    zmatPrim ="Pizza" 
    zmatSec = "chicken"



export default function ImageButtonFlip(props) {
  const { name, source} = props;

  const [isFlippy, setIsFlippy] = useState(false);


  

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlippy(!isFlippy);
  }


 
const ImageButton = ({  source }) => (
    
    <Grid item
        flexgrow= {3}
        style={{ padding: 10, alignContent:"center",  }}
      >

      <Card onClick={handleClick} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={source}
            alt="green iguana"
          />
          
        </CardActionArea>
      </Card>
  </Grid>
)

const ImageButtonFlip = ({  name,  }) => (
    
    <Grid item
        flexgrow= {3}
        style={{ padding: 10, alignContent:"center",  }}
      >

      <Card onClick={handleClick} sx={{ maxWidth: 345 }}>
        <Typography variant="headline" component="h2">
              {name}
            </Typography>
      </Card>
  </Grid>
)



// Object.values(material).map((choice, idx) => {( console.log( choice, idx))})
   
 
console.log("MaterialMenu", name)

  const menuItems = (name, source) => (
    // console.log("MaterialMenu", name)
    

      <div  onClick={handleClick}>
      {/* <div key={idx} onClick={handleClick}> */}

          <ReactCardFlip isFlipped={isFlippy} flipDirection="vertical">
            <ImageButton 
          
            // key={idx}
            // keys={GetKeyByValue(material, choice)}
            width='100%' 
            alt={name}
            name={name}
            source={source} 
            
            />

            <ImageButtonFlip 
          
            // key={idx}
            // keys={GetKeyByValue(material, choice)}
            width='100%' 
            name={name}
            
            />


          </ReactCardFlip>  
      </div>
    )
    


  return (
    
    <div >
        <Grid  item 
            
            flexgrow = {1}
            style={{padding: '50px',}}
            >

              {menuItems(name, source)}  

        </Grid>
    </div>
    
  );

}
