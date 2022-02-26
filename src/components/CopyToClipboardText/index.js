import {Box, Typography, IconButton, Tooltip} from "@mui/material";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import {PropTypes} from "prop-types";
import {useCallback, useEffect, useRef, useState} from "react";
import {useCopyToClipboard} from "react-use";

export const CopyToClipboardText = ({text}) => {

  const classes = {
    boxClass: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      color: 'primary.main',
      position: 'relative',
    },
    typoClass: {},
    iconClass: {
      cursor: 'pointer',
      marginRight: '10px',
      transition: ' .3s ease',
      border: 'none',
      color: 'primary.main',
      '&:active': {
        color: 'blue'
      },
    },
    popupDefault: {
      background: 'black',
      color: 'white',
      minWidth: '100px',
      borderRadius: '5px',
      p: 1,
      position: 'absolute',
      top: '100%',
      left: '20px',
      visibility: 'hidden',
      transition: 'visibility 2s ease'
    },
    popupVisible: {
      background: 'black',
      color: 'white',
      minWidth: '100px',
      borderRadius: '5px',
      p: 1,
      position: 'absolute',
      top: '100%',
      left: '20px',
      visibility: 'visible',
      transition: 'visibility 2s ease'
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const [state, copyToClipboard] = useCopyToClipboard();

  const handleOpen = useCallback(() => {
    copyToClipboard(text);
    setIsOpen(prev => !prev);
  },[text,copyToClipboard])


  return (
    <Box sx={classes.boxClass} onMouseLeave={() => setIsOpen(false)}>
      <Tooltip title='Копировать' placement="top">
        <IconButton
          sx={classes.iconClass}
          fontSize='small'
          onClick={handleOpen}
        >
          <ContentCopyRoundedIcon/>
        </IconButton>
      </Tooltip>
      <Box
        sx={
          isOpen
            ? classes.popupVisible
            : classes.popupDefault
        }
      >
        Скопировано!
      </Box>
      <Typography variant="subtitle2">
        {text}
      </Typography>
    </Box>
  );
};

CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired
}

