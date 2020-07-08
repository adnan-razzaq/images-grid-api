import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const usestyles = makeStyles({
  heading: {
    margin: " 4px auto",
  },
});
export default function Navbar() {
  const classes = usestyles();
  return (
    <AppBar position="static" color="secondary">
      <Typography className={classes.heading} variant="h3">
        Pixabay
      </Typography>
    </AppBar>
  );
}
