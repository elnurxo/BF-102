import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAllSongs } from "../api/requests";
import style from "./home.module.css";

const Home = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    getAllSongs().then((res) => {
      setSongs(res);
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
      <Table style={{width:'80%',margin:'20px auto'}} aria-label="simple table">
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
                  className={style.row}
                  key={song._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      className={style.image}
                      width={70}
                      height={70}
                      src={song.cover}
                      alt={song.name}
                    />
                  </TableCell>
                  <TableCell align="right">{song.title}</TableCell>
                  <TableCell align="right">{song.duration}</TableCell>
                  <TableCell align="right">{song.releaseYear}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </>
  );
};

export default Home;
