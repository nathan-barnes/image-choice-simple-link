import React, {useState, useEffect, useCallback } from "react";
// import MaterialSwatch from "./MaterialSwatch";
import Materials from '../collections/materials'
import GetKeyByValue from '../utils/getKeyByValue'
// import ShuffleUndo from '../utils/ShuffleUndo'
// import UndoRedo from '../utils/undoRedo'
import {  Grid, Paper, Box, Button, Card, CardActionArea, CardMedia, Typography   } from "@mui/material";
// import ReactCardFlip from 'react-card-flip';
import ImageCardFlip from './imageCardFlip';

let zmatPrim 
let zmatSec
let namy


    zmatPrim ="Pizza" 
    zmatSec = "chicken"



export default function MaterialMenu(props) {
  const { material, setMaterial, setMatScene, asyncLogParams, setUrlConfig } = props;

  const [isFlippy, setIsFlippy] = useState(false);


  

  // const handleClick = (event) => {
  //   let eventTarget = event.currentTarget.children[0].id

    
  // };

  const handleClick = (e) => {
    e.preventDefault();
    // setIsFlippy(prevState => ({ isFlipped: !prevState.isFlipped }));
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
   
const menuItems = Object.values(Materials).map((obj, idx) => (
  <div key={idx}>
    <ImageCardFlip name={obj.name} source={obj.imageUrl}/>
  </div>
))

// console.log('namy', namy)

  // const menuItems = Object.values(material).map((choice, idx) => (
  //   // console.log("MaterialMenu", choice)
    

  //     <div key={idx} onClick={handleClick}>

  //         <ReactCardFlip isFlipped={isFlippy} flipDirection="vertical">
  //           <ImageButton 
          
  //           key={idx}
  //           keys={GetKeyByValue(material, choice)}
  //           width='100%' 
  //           alt={Materials.filter(v => v.name === choice)[0].name}
  //           name={Materials.filter(v => v.name === choice)[0].name}
  //           source={Materials.filter(v => v.name === choice)[0].imageUrl} 
  //           idx={idx} 
            
  //           />

  //           <ImageButtonFlip 
          
  //           key={idx}
  //           keys={GetKeyByValue(material, choice)}
  //           width='100%' 
  //           name={Materials.filter(v => v.name === choice)[0].name}
  //           idx={idx} 
            
  //           />


  //         </ReactCardFlip>  
  //     </div>
  //   )
  //   )


  return (
    
    <div >
        <Grid  item 
            
            flexgrow = {1}
            style={{padding: '50px',}}
            // onMouseEnter={() => setmousOnMaterials(true)}
            // onMouseLeave={() => setmousOnMaterials(false)}
            >

              {/* <Paper> */}
              {menuItems}  
              

        </Grid>
    </div>
    
  );

}
