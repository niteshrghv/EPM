import React from 'react'

import {Box, Typography, styled} from '@mui/material';

//components
import Headings from './Headings';
import Filter from './Filter';
import TableCompo from './TableCompo';
import Stats from './Stats';

const Home=()=>{
  return (
    <Box>
      <Headings/>
      <Filter/>
      <TableCompo/>
      <Stats/>
    </Box>
   
  )
}

export default Home; 