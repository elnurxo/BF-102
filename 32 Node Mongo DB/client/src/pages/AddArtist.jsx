import React from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import { ArtistValidation } from "../validation/ArtistShcema";
import { postArtist } from "../api/requests";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useArtistContext } from "../context/ArtistContext";

const AddArtist = () => {
  const navigate = useNavigate();
  const[artists,setArtists] = useArtistContext();
  const handleSubmit = async(values, actions) => {
    await postArtist(values);
    setArtists([...artists,values])
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${values.name} posted successfully!`,
      showConfirmButton: false,
      timer: 1500
    })
    actions.resetForm();
    navigate('/artists');
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      imageURL: "",
    },
    validationSchema: ArtistValidation,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Helmet>
        <title>Add New Artist</title>
      </Helmet>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="enter name"
          type="text"
          name="name"
        />
        {formik.errors.name && formik.touched.name && (
          <span>{formik.errors.name}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          placeholder="enter age"
          type="number"
          name="age"
        />
        {formik.errors.age && formik.touched.age && (
          <span>{formik.errors.age}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageURL}
          placeholder="enter image"
          type="url"
          name="imageURL"
        />
        {formik.errors.imageURL && formik.touched.imageURL && (
          <span>{formik.errors.imageURL}</span>
        )}
        <button
          disabled={Object.keys(formik.errors).length !== 0 ? true : false}
          type="submit"
        >
          Add New Artist
        </button>
      </form>
    </>
  );
};

export default AddArtist;
