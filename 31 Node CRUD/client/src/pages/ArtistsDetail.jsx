import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getArtistByID } from '../api/requests';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Card } from 'antd';
import { Helmet } from 'react-helmet';

const ArtistsDetail = () => {
  const[artist,setArtist] = useState({});
  const{id} = useParams();
  useEffect(()=>{
    getArtistByID(id).then(res=>{
        setArtist(res);
    })
  },[id]);
  return (
    <>
     <Helmet>
        <title>Detail Page</title>
      </Helmet>
     <Box sx={{ flexGrow: 1, width: "90%", margin: "25px auto" }}>
      <Grid container spacing={2}>
              <Grid key={artist.id} item lg={3} md={6} sm={12}>
                <Card
                  hoverable
                  cover={
                    <img
                      style={{
                        height: "250px",
                        objectFit: "cover",
                        objectPosition: "top center ",
                      }}
                      alt="example"
                      src={artist.imageURL}
                    />
                  }
                >
                  <Typography>{artist.name}</Typography>
                  <Button variant='contained' color="primary"><Link style={{color:'white'}} to='/artists'>Go Back</Link></Button>
                  <Typography>age: {artist.age}</Typography>
                </Card>
              </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default ArtistsDetail