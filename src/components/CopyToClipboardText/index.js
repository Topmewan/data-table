import PropTypes from "prop-types";

import {Box, Typography, IconButton, Tooltip} from "@mui/material";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import {useCallback, useState} from "react";
import {useCopyToClipboard} from "react-use";

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

const OPEN_STATUS = {
  OPEN:true,
  CLOSE:false
}

export const CopyToClipboardText = ({text}) => {

  const [isOpen, setIsOpen] = useState(OPEN_STATUS.CLOSE);
  const [, copyToClipboard] = useCopyToClipboard();

  const getOpenStatus = () => {
    switch (isOpen){
      case OPEN_STATUS.OPEN:
        return true;
      case OPEN_STATUS.CLOSE:
        return false;
      default:
        return false;
    }
  }

  const handleOpen = useCallback(() => {
    copyToClipboard(text);
    setIsOpen(OPEN_STATUS.OPEN);
  },[text,copyToClipboard])

  const handleMouseLeaveAway = useCallback(() => {
    setIsOpen(OPEN_STATUS.CLOSE);
  },[setIsOpen])


  return (
    <Box sx={classes.boxClass} onMouseLeave={handleMouseLeaveAway}>
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
          getOpenStatus()
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

