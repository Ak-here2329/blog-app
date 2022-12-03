import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import  {useNavigate}from 'react-router-dom';
import axios from 'axios';

const Blog = ({title, description, imageURL, userName, isUser, id}) => {

  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err => console.log(err));
    const data = res.data;
    return data; 
  }

  const handleDelete = () => {
    deleteRequest().then(() => navigate("/")).then(() => navigate("/blogs"));
  }



  console.log(title, isUser);
  return (
    <div>
      <Card sx={{ width: "40%", 
                margin: 'auto', 
                mt: 3, 
                padding: 2, 
                boxShadow: "5px 5px 10px #ccc",
                ":hover":{
                    boxShadow: "15px 15px 20px #ccc"
                } }}>
        
      {isUser && (
        <Box display={"flex"}>
          <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}>
            <ModeEditOutlineIcon color='warning'/> 
          </IconButton>
          <IconButton onClick={handleDelete} >
            <DeleteOutlineIcon color="error" /> 
          </IconButton>
        </Box>
      )}

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {userName.charAt(0)}
          </Avatar>
        } 
        title= {title}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <hr/><br/>
        <Typography variant="body2" color="text.secondary">
          <b>{userName} {": "}</b>
          {description}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default Blog;
