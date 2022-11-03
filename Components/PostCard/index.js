import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

function PostCard() {
  return (
    <Card sx={{boxShadow:"0px 0px 100px 10px rgba(0,0,0,0.1)"}}>
    <CardContent sx={{padding:"5px 0px"}}>
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Box sx={{display:"flex",alignItems:"center",flexGrow:1}}>
        <IconButton>
            <StyledBadge
             overlap="circular"
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             variant="dot"
            >
          <Avatar
          sx={{ width: 25, height: 25 }} 
          src={"https://prettyinbabyfood.com/wp-content/uploads/2019/12/5d819fa9e4b07fba0ef6ddd2_preview_clean.png"}
          />
          </StyledBadge>
        </IconButton>
        <Stack>
          <Typography sx={{fontWeight:"bold"}}>Harley quinn</Typography>
          <Typography sx={{fontWeight:"thin",fontSize:"10px",color:"gray"}}>Actor</Typography>
        </Stack>
        </Box>
        <IconButton>
        <MoreVertIcon  sx={{fontSize:"20px"}}/>
      </IconButton>
      </Stack>
    </CardContent>
    <CardActionArea>
    <CardMedia
      component={"img"}
      height={400}
      image="https://prettyinbabyfood.com/wp-content/uploads/2019/12/5d819fa9e4b07fba0ef6ddd2_preview_clean.png"
      />
      
      </CardActionArea>
      <CardContent  sx={{paddingBottom:"2px"}}>
        <Stack direction={"row"}>
        <Box sx={{flexGrow:1}}>
        <Typography sx={{fontWeight:"bold"}}> @_Title</Typography>
        </Box>
        <Typography sx={{fontWeight:"thin" ,color:"gray" ,fontSize:"10px"}}>1 DAY AGO</Typography>
        </Stack>
      
        <Box sx={{padding:"5px 10px "}}>
         <Typography sx={{fontSize:"10px"}}>Dr. Harleen Frances Quinzel, also known as Harley Quinn {`{(a pun on the word "harlequin")}`}, first appeared ... <Button>
          Read more
        </Button></Typography>

        {/* <Typography>Dr. Harleen Frances Quinzel, also known as Harley Quinn {`{(a pun on the word "harlequin")}`}, first appeared in the Batman: The Animated Series episode {"Joker's Favor"}, where she served as a humorous female sidekick to the Joker.</Typography> */}
        <Link>
        <Typography >#fashon</Typography>
        </Link>
        </Box>
      </CardContent>
     <CardContent sx={{}}>
      <Stack direction={"row"}>
      <Box sx={{flexGrow:1}}>
      <IconButton>
        <ThumbUpOffAltIcon sx={{fontSize:"30px"}}/>
      </IconButton>
      
      <IconButton>
        <CommentRoundedIcon sx={{fontSize:"30px"}}/>
      </IconButton>
      </Box>
      <IconButton>
        <BookmarkAddRoundedIcon  sx={{fontSize:"30px"}}/>
      </IconButton>
      <IconButton>
        <ShareRoundedIcon  sx={{fontSize:"30px"}}/>
      </IconButton>
      </Stack>
    </CardContent>
    </Card>  
  )
}

export default PostCard