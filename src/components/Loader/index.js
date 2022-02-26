import React from 'react';
import Skeleton from '@mui/material/Skeleton';

export const Loader = () => {
  return (
    <div>
      <Skeleton animation="wave" height={80}/>
      <Skeleton animation="wave" height={80}/>
      <Skeleton animation="wave" height={80}/>
      <Skeleton animation="wave" height={80}/>
    </div>
  );
};

