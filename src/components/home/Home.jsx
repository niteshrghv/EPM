import React,{useContext} from 'react'

import {Box, Typography, Button, styled} from '@mui/material';

//components
import Headings from './Headings';
import Filter from './Filter';
import TableCompo from './TableCompo';
import Stats from './Stats';
import { DataContext } from '../../context/DataProvider';


const StyledButton = styled(Button)({
  background:"#e6134e",
  // background:"Ff0000",
  color:"#fff",
  fontSize:"14px",
  borderRadius:"10px",
  margin:"20px 10px 0px 10px",
  padding:"15px 25px",
  '&:hover': {
    backgroundColor: '#56b5ba',
    color: '#fff',
  },
});


const Home=()=>{
  
  const {statsBtn, setStatsBtn}=useContext(DataContext);

  const trueStats="Hide Statistics";
  const falseStats="Show Statistics";

  const handleStatsBtn=()=>{
    setStatsBtn((prevState) => !prevState);
  }

  return (
    <Box>
      <Headings/>
      <Filter/>
      <TableCompo/>
      <Box style={{display:"flex", justifyContent: "center"}}>
        <StyledButton onClick={handleStatsBtn}>{statsBtn?trueStats:falseStats}</StyledButton>
      </Box>
        {
          statsBtn?<Stats/>:null
        }   
    </Box>
  )
}

export default Home; 