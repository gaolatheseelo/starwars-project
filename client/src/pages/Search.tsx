import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "react-bootstrap";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  let navigate = useNavigate();

  var searched = "";

  const onChange = (event: { target: { value: string } }) => {
    console.log(event.target.value);
    searched = event.target.value;
  };

  return (
    <Container>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Star Wars Characters"
          inputProps={{ "aria-label": "search stars wars characters" }}
          onChange={onChange}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => navigate(`/profile/${searched}`)}
        >
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>

      <span> </span>
      <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
      <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>

      <Card sx={{ maxWidth: 345, alignItems: "right" }}>
        <CardMedia
          component="img"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
          alt="star wars"
        />
      </Card>
    </Container>
  );
}
