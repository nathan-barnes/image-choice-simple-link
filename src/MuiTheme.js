import { createTheme } from "@mui/material/styles";

import grey from "@mui/material/colors/grey";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f82400",
    },
    secondary: {
      main: grey[500],
    },
    secondarygrey: {
      main: grey[100],
    },
    white: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "aktiv-grotesk",
      "Aktiv Grotesk",
      "Helvetica Neue",
      "Helvetica",
      "inter",
       ],
  },
    
  overrides: {
    MuiButton: {
        outlined: {              
            color: 'red',
            border: '3px solid red',
        },
      root: {
        borderRadius: 40,
        // border: '#04AA6D',
        // borderWidth: 5,
        // outlineColor: 'red',
        color: 'red',
        minHeight: '80px',
        minWidth: '200px',
        fontSize: '25px',
        textTransform: 'none',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'red',
            color: 'white',
            },
        }, 
        
    }, 
  }, 
  
  
});

export default theme;