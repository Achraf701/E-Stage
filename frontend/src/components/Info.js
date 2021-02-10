import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";
const pages = {
  JOIN: "pages.join",
  CREATE: "pages.create",
};
const explication = {
  join_explication: "choose a stage entre the code shared  by the host on enjoy his songs list, you dont like the song ?? voting to skip the song is always an option ;)  ) ",
  create_explication: "You chance to stand on e-Stage be the DJ and share your taste and be loved song with your fans ",
};
export default function Info (props){
 
    const [page,setPage] = useState(pages.JOIN);

    function joinInfo()
    {
    return explication.join_explication; 
    }
 
    function createInfo()
    {
    return explication.create_explication;
    }
 
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            What is Star on e-Stage ?
          </Typography>
        </Grid>
        <Grid  item xs={12} align="center" >
          <Typography variant="h6" >
            {page === pages.JOIN ? joinInfo() : createInfo()}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <IconButton size='medium'  color= "secondary"
            onClick={() => {
              page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);
            }}
          >
            {page === pages.CREATE ? (
              <NavigateBeforeIcon />
            ) : (
              <NavigateNextIcon />
            )}
          </IconButton>
        </Grid>
        <Grid item xs={12} align="center">
          <Button size = "large" color="secondary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    );
}
