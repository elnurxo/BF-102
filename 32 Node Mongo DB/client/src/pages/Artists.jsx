import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card, Typography } from "antd";
import { deleteArtistByID, getAllArtists } from "../api/requests";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    getAllArtists().then((res) => {
      setArtists(res);
    });
  }, []);
  function handleSearch(e) {
    getAllArtists(e.target.value).then((res) => {
      setArtists(res);
    });
  }
  return (
    <>
      <Helmet>
        <title>Artists</title>
      </Helmet>
      <Box
        
        sx={{ flexGrow: 1, width: "90%", margin: "25px auto" }}
      >
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <TextField
            onChange={(e) => handleSearch(e)}
            style={{ marginBottom: "30px" }}
            id="outlined-basic"
            label="Search Artist"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="success"
            style={{marginLeft:'10px'}}
            onClick={() => {
              let sortedArtists = [...artists.sort((a, b) => a.age - b.age)];
              setArtists(sortedArtists);
            }}
          >
            Sort by Age
          </Button>
        </div>

        <Grid container spacing={2}>
          {artists &&
            artists.map((artist) => {
              return (
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
                    <Typography>
                      <Link to={`/artist/${artist._id}`}>{artist.name}</Link>
                    </Typography>
                    <Typography>age: {artist.age}</Typography>
                    <Button
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            deleteArtistByID(artist._id).then((res) => {
                              Swal.fire(
                                `${res.name} Deleted!`,
                                "Your artist has been deleted.",
                                "success"
                              );
                            });
                            setArtists(
                              artists.filter((x) => x._id !== artist._id)
                            );
                          }
                        });
                      }}
                      variant="outlined"
                      color="warning"
                    >
                      Delete
                    </Button>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
};

export default Artists;
