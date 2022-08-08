import React, {useState, useEffect, useCallback, Fragment } from "react";

import Materials from '../collections/materials'
import GetKeyByValue from '../utils/getKeyByValue'
import iNeed from '../static/iNeed.aac'

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
    if(audiourl.type != 'Decision'){
        console.log('audiourl',iNeed, audiourl.audioSrc)


        const audioNeed = new Audio(iNeed);
        const audio = new Audio(audiourl.audioSrc);

        audioNeed.play()

        setTimeout(function() {
          audio.play();
        }, 3000);


        // let uris = [iNeed, audiourl.audioSrc],
        // proms = uris.map(uri => fetch(uri).then(r => r.blob()));
        // console.log('proms',proms)

        // Promise.all(proms).then(blobs => {
        //   console.log('blobs',blobs)
        //   let blob = new Blob([blobs[0], blobs[1]])
        //   console.log('blob', blob)
        //   let blobUrl = URL.createObjectURL(blob)
        //   const audio = new Audio(blobUrl);
        //   audio.play();
        // })
        
    } else {
      // let blob = new Blob([iNeed, audiourl])
        // let blobUrl = URL.createObjectURL(blob)
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
        {/* <Grid  item 
            xs={6}
            // flexgrow = {3}
            // style={{padding: '5px', width:'250px', height:'250px', alignContent:"center"}}
            > */}

              {menuItems(name, source, type)}  

        {/* </Grid> */}
    </div>
    
  );

}
