import {Box, Typography} from "@mui/material";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import {PropTypes} from "prop-types";
import {useEffect, useRef, useState} from "react";
import {useCopyToClipboard} from "react-use";

export const CopyToClipboardText = ({text}) => {

  const classes = {
    boxClass:{
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
      transition: 'visibility 2s ease'
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
      visibility: 'visible',
      transition: 'visibility 2s ease'

    }

  }

  const [isOpen,setIsOpen] = useState(false);
  const [value, setValue] = useState(text);
  const [state, copyToClipboard] = useCopyToClipboard();

  const handleOpen = () => {
    copyToClipboard(value);
    setIsOpen(prev => !prev);
  }

  const myRef = useRef(null);
  useEffect(() => {

    const elem = myRef.current;
    if(isOpen && elem){
      elem.addEventListener('mouseleave',handleOpen)
    }

    return () => {
      elem.removeEventListener('mouseleave',handleOpen)
    }

  },)

  return (
    <Box sx={classes.boxClass} ref={myRef}>
      <ContentCopyRoundedIcon sx={classes.iconClass} fontSize='small' onClick={handleOpen}/>
      <Box sx={isOpen ? classes.popupVisible : classes.popupDefault}>Скопировано!</Box>
      <Typography variant="subtitle2" value>
        {value}
      </Typography>
    </Box>
  );
};

CopyToClipboardText.propTypes = {
  text:PropTypes.string.isRequired
}

