import { AppBar, Avatar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Navbar({username}) {
  return (
    <AppBar position='sticky'  sx={{background:"white",boxShadow:"none"}}>
            <Container maxWidth="sm" >
            <Toolbar sx={{alignItems:"center",gap:1,background:"#ffffff",color:"black","&":{minHeight:"40px"}}} >
                    <Avatar   sx={{ width: 25, height: 25 }}  /> 
                    <Typography sx={{fontWeight:"800"}}>{username}</Typography>

            </Toolbar>
              </Container>
    </AppBar>
  )
}

export default Navbar;