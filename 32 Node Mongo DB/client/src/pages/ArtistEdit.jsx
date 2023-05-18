import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editArtist, getArtistByID } from "../api/requests";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useArtistContext } from "../context/ArtistContext";

const ArtistEdit = () => {
  const[artists,setArtists] = useArtistContext();
  console.log('artists context: ',artists);
  const { id } = useParams();
  const navigate = useNavigate();
  const [artist, setArtist] = useState({});
  const[loading,setLoading] = useState(true);
  useEffect(() => {
    getArtistByID(id).then((res) => {
      setArtist(res);
      formik.values.name = res.name;
      formik.values.age = res.age;
      formik.values.imageURL = res.imageURL;
      setLoading(false);
    });
  }, [id]);
  const handleEdit = async(values, actions) => {
    // artist.find((x)=>x._id===id)
    setArtists(values);
    await editArtist(id,values);
    navigate('/artists');
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: artist.name,
      age: artist.age,
      imageURL: artist.imageURL,
    },
    onSubmit: handleEdit,
  });
  return (
    <>
      <Typography
        style={{ textAlign: "center", marginTop: "40px", fontSize: "30px" }}
      >
        {artist.name} Edit
      </Typography>
      { loading ? <div>loading...</div> : <form style={{width:'60%',margin:'0 auto'}} onSubmit={formik.handleSubmit}>
        <div style={{display:'flex',justifyContent:'center'}}>
        <TextField
          type="text"
          placeholder="artist name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <TextField
          type="number"
          placeholder="artist age"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <TextField
          type="text"
          placeholder="artist image"
          name="imageURL"
          value={formik.values.imageURL}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        </div>
        <Button style={{margin:'0 auto',display:'block',marginTop:'20px'}} variant="contained" color="primary" type="submit">Edit</Button>
      </form> }
    </>
  );
};

export default ArtistEdit;
