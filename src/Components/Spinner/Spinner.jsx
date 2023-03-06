import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
