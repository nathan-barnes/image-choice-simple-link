import React, {useState, useEffect, useCallback, Fragment } from "react";

import Materials from '../collections/materials'
import GetKeyByValue from '../utils/getKeyByValue'
import iNeed from '../static/iNeed.aac'
import soundI from '../static/I.mp3'
import soundWant from '../static/Want.mp3'
import soundFeel from '../static/feel.mp3'

import {  Grid, Paper, Box, Button, Card, CardActionArea, CardMedia, Typography   } from "@mui/material";
import ReactCardFlip from 'react-card-flip';
import { height } from "@mui/system";



export default function ImageButtonFlip(props) {
  const { name, source, audioSrc, type} = props;

  const [isFlippy, setIsFlippy] = useState(false);
  const [audio, setaudio] = useState('');

//   console.log('name, source, audioSrc', name, source, audioSrc)

const playIt = (src) => {

}


  const PlayAudio = (audiourl, type) => {
    // if (isFlippy){

    console.log(audiourl.type)

    if(audiourl.type == 'Food'){
        // console.log('audiourl',iNeed, audiourl.audioSrc)

        const audioI = new Audio(soundI);
        const audioWant = new Audio(soundWant);
        const audio = new Audio(audiourl.audioSrc);

        audioI.play()
        setTimeout(function() {
          audioWant.play();
        }, 500);
        setTimeout(function() {
          audio.play();
        }, 1200);


        
    } 
    if(audiourl.type == 'Feelings'){
        // console.log('audiourl',iNeed, audiourl.audioSrc)

        const audioI = new Audio(soundI);
        const audioFeel = new Audio(soundFeel);
        const audio = new Audio(audiourl.audioSrc);

        audioI.play()
        setTimeout(function() {
          audioFeel.play();
        }, 500);
        setTimeout(function() {
          audio.play();
        }, 1200);


        
    } 
    
    if(audiourl.type == 'Decision'){
        const audio = new Audio(audiourl.audioSrc);
        audio.play();
    }
    // }
    handleClick()

  }



  const handleClick = (e) => {
    // e.preventDefault();
    setIsFlippy(!isFlippy);

  }


 
const ImageButton = ({  source, audioSrc }) => (
    
        <Card onClick={() => PlayAudio({audioSrc, type})} sx={{  height:250,  verticalAlign: 'middle',  justifyContent: 'center', alignItems: 'center', display:'flex',}}>
        {/* <Card onClick={handleClick} sx={{ maxWidth: 345, height:250 }}> */}
            {/* <Fragment> */}
            <div style={{ padding: 10, 
                }}>
                {/* <AudioClip source={() => PlayAudio({audioSrc})}/>  */}
                <CardActionArea sx={{  alignItems:"center"}}>
                    <CardMedia
                        component="img"
                        // height="140"
                        image={source}
                        alt={name}
                    />
                    {/* <CardMedia
                        component="audio"
                        autoPlay 
                        // height="140"
                        src={iNeed}
                    /> */}
                    {/* <CardMedia
                        component="audio"
                        // autoPlay 
                        // height="140"
                        src={audioSrc}
                    /> */}
                </CardActionArea>
              </div>
            {/* </Fragment> */}
        </Card>
    
)

const ImageButtonFlip = ({  name,  }) => (
    

      <Card onClick={handleClick} sx={{ height:250, verticalAlign: 'middle' }}>
      {/* <Card onClick={handleClick} sx={{ maxWidth: 345, height:250 }}> */}
      <div style={{paddingTop: '50%'}}>
        <Typography variant="headline" component="h1" align="center"  textAlign= 'center'>
            {name}
        </Typography>
        </div>
      </Card>

)



  const menuItems = (name, source, type) => (
    // console.log("MaterialMenu", name)
    

      <div  
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
                type={type}
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


      {menuItems(name, source, type)}  


    </div>
    
  );

}
