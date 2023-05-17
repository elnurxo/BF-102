import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArtistSongs, getArtistByID, postSong } from "../api/requests";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Card } from "antd";
import { Helmet } from "react-helmet";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from '@mui/material/Modal';
import { useFormik } from "formik";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ArtistsDetail = () => {
  const [artist, setArtist] = useState({});
  const[songs,setSongs] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();
  useEffect(() => {
    getArtistByID(id).then((res) => {
      setArtist(res);
    });
  }, [id]);
  useEffect(()=>{
    getArtistSongs(id).then((res)=>{
      setSongs(res);
    })
  },[id]);
  async function handleSubmit(values,actions){
    console.log('song data: ',values);
    values.artistID = id;
    await postSong(values);
    getArtistSongs(id).then((res)=>{
      setSongs(res);
    })
    handleClose();
    actions.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      title: "",
      duration: "",
      cover: "",
      releaseYear: ""
    },
    onSubmit: handleSubmit
  })
  return (
    <>
      <Helmet>
        <title>Detail Page</title>
      </Helmet>
      <Box sx={{ flexGrow: 1, width: "90%", margin: "25px auto" }}>
        <Grid
          style={{ display: "flex", justifyContent: "space-between" }}
          container
          spacing={2}
        >
          <Grid key={artist._id} item lg={3} md={6} sm={12}>
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
              <Typography>age: {artist.age}</Typography>
              <Button variant="contained" color="primary">
                <Link style={{ color: "white" }} to="/artists">
                  Go Back
                </Link>
              </Button>
            </Card>
            <Button
              style={{ marginTop: "30px" }}
              variant="outlined"
              color="info"
              onClick={handleOpen}
            >
              Add Song
            </Button>
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Cover Image</TableCell>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Duration</TableCell>
                    <TableCell align="right">Release Year</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {songs.map((song) => (
                    <TableRow
                      key={song._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <img width={70} height={70} src={song.cover} alt={song.name}/>
                      </TableCell>
                      <TableCell align="right">{song.title}</TableCell>
                      <TableCell align="right">{song.duration}</TableCell>
                      <TableCell align="right">{song.releaseYear}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Add New Song for {artist.name}</Typography>
            <form onSubmit={formik.handleSubmit} style={{display:'flex',gap:'10px'}}>
              <div>
              <TextField name="title" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title}  style={{marginBottom:'10px'}} id="outlined-basic" type="text" label="Title" variant="outlined" />
              <TextField name="duration" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.duration}  id="outlined-basic" type="number" label="Duration" variant="outlined" />
              </div>
             <div>
             <TextField name="cover" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cover} style={{marginBottom:'10px'}} id="outlined-basic" label="Cover" variant="outlined" />
              <TextField name="releaseYear" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.releaseYear} id="outlined-basic" label="Release Year" type="number" variant="outlined" />
              <Button style={{marginTop:'10px'}} variant="contained" color="warning" type="submit">Post Song</Button>
             </div>
            </form>
        </Box>
      </Modal>
    </>
  );
};

export default ArtistsDetail;
