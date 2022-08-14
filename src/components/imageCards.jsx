import React, {useState, useEffect, useCallback } from "react";
// import MaterialSwatch from "./MaterialSwatch";
import Materials from '../collections/materials'
import GetKeyByValue from '../utils/getKeyByValue'
// import ShuffleUndo from '../utils/ShuffleUndo'
// import UndoRedo from '../utils/undoRedo'
import {  Grid, Paper, Box, Button, Card, CardActionArea, CardMedia, Typography   } from "@mui/material";
// import ReactCardFlip from 'react-card-flip';
import ImageCardFlip from './imageCardFlip';

// const sceneBuildFunc = (matString, sch) => {
//   const temp = SceneBuild.filter(v => v.view === matString).filter(v => v.scheme === sch).map(choice => choice.imageUrl.default)
//   const temp2 = SceneBuild.filter(v => v.view === matString).filter(v => v.scheme === sch).map(choice => choice.imageUrl2.default)
//   return [temp, temp2]
// }
import { useNavigate } from "react-router-dom";

// export const Item = () => {
//     let history = useHistory();
//     return (
//         <>
//           <button onClick={() => history.goBack()}>Back</button>
//         </>
//     );
// };


export default function MaterialMenu({type}) {

  let navigateHome = useNavigate();

// Object.values(material).map((choice, idx) => {( console.log( choice, idx))})
   
const menuItems = Object.values(Materials).filter(v => v.type === type).map((obj, idx) => (
    // <Grid  item xs={2} sm={4} md={4} key={idx} flexgrow = {1}>
      <div key={idx}>
        <ImageCardFlip name={obj.name} source={obj.imageUrl} audioSrc={obj.link} type={obj.type}/>
        {/* </Grid> */}
      </div>
))


  return (
    
    // <div style={{height: '250px', width: '250px', padding: '15px', alignContent: 'center'}} >
        <Grid id="hello" container item 
            xs={8}
            // flexgrow = {4}
            // style={{padding: '10px', alignContent: 'center'}}
            >
              <button onClick={() => navigateHome('/')}>Back</button>
              {menuItems}  
              

        </Grid>
    //  </div>
    
  );

}
