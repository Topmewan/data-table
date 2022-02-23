import {Box, Typography} from "@mui/material";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import {PropTypes} from "prop-types";
import {useEffect, useState} from "react";

export const CopyToClipboardText = ({text}) => {

  const classes = {
    boxClass:{
      maxWidth:'100%',
      display:'flex',
      alignItems:'center',
      flexDirection:'row',
      color:'primary.main',
      position:'relative',
  },
    typoClass:{
    },
    iconClass:{
      cursor:'pointer',
      marginRight:'10px',
      transition:' .3s ease',
      border:'none',
      '&:active':{
        color: 'blue'
      },
    },
    popupDefault:{
      background:'black',
      color:'white',
      minWidth:'100px',
      borderRadius:'5px',
      p:1,
      position: 'absolute',
      top:'100%',
      left:'20px',
      visibility:'hidden',
      transition: 'visibility .2s ease'
    },
    popupVisible:{
      background:'black',
      color:'white',
      minWidth:'100px',
      borderRadius:'5px',
      p:1,
      position: 'absolute',
      top:'100%',
      left:'20px',
      visibility: 'visible'
    }

  }

  const [isOpen,setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(prev => !prev);
  }

  useEffect(() => {
    if(isOpen){
      window.addEventListener('click',handleOpen)
    }
    return () => {
      window.removeEventListener('click',handleOpen)
    }
  })

  return (
    <Box sx={classes.boxClass}>
      <ContentCopyRoundedIcon sx={classes.iconClass} fontSize='small' onClick={handleOpen}/>
      <Box sx={isOpen ? classes.popupVisible : classes.popupDefault}>Скопировано!</Box>
      <Typography variant="subtitle2">
        {text}
      </Typography>
    </Box>
  );
};

CopyToClipboardText.propTypes = {
  text:PropTypes.string.isRequired
}

