import { Avatar, BottomNavigation,BottomNavigationAction, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Link, Paper, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';import PostCard from '../Components/PostCard';

;
function Index() {
  return (
    <>
    {/* <Box sx={{display:{xs:"block" ,sm:"none"}}}> */}
    <Navbar username={"Dev_"}/> 
    {/* </Box> */}
    
    <Container maxWidth={"sm"}>
        
        <Grid container sx={{marginBottom:"50px"}}>
            <Grid item xs={12}>
              <Box sx={{padding:"10px 0px"}}>
              <PostCard/>
              </Box>
            </Grid>           
            <Grid item xs={12}>
              <Box sx={{padding:"20px 0px"}}>
              <PostCard/>
              </Box>
            </Grid>   
        </Grid>

    </Container>
    <Paper sx={{position:"fixed", bottom: 0, left: 0, right: 0,zIndex:1}}>
    <BottomNavigation>
    <BottomNavigationAction label="Recents" icon={<ShareRoundedIcon />} />
          <BottomNavigationAction label="Favorites" icon={<ShareRoundedIcon />} />
          <BottomNavigationAction label="Archive" icon={<ShareRoundedIcon />} />
    </BottomNavigation>
    </Paper>
    </>
  )
}

export default Index