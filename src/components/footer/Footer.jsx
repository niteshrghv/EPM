import React from 'react';
import {Typography, Divider, Box} from '@mui/material';
let date=new Date();
export default function Footer() {
  return (
    <>
        <Box style={{ padding:20, marginTop:25}}> 
        <Box style={{display:'flex', justifyContent: 'center', paddingBottom:15 }}>
         <Divider style={{width:"40%"}}/>
        </Box> 
       
            <Typography color="#000000"  style={{fontSize:'13px', fontWeight:500, textAlign:"center"}}>© 2023 All Rights Reserved. GradeBook BY Nitesh Kumar  {date.toDateString()}  </Typography>
        </Box>
    </>
  )
}
