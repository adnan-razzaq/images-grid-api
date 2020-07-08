import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import axios from "axios";
import ImagesGrid from "./ImagesGrid";
const usestyles = makeStyles({
  text: {
    marginTop: "10px",
  },
  items: {
    minWidth: "200px",
  },
});

export default function Search() {
  const classes = usestyles();
  let initalState = {
    searchText: "",
    amount: 15,
    api: "https://pixabay.com/api/",
    images: [],
  };
  const [data, setData] = useState(initalState);

  useEffect(() => {
    const getdata = async () => {
      const res = await axios
        .get(
          `${data.api}?key=${process.env.REACT_APP_SECRET}&q=${data.searchText}&image_type=photo&per_page=${data.amount}`
        )
        .then((res) => setData({ ...data, images: res.data.hits }))
        .catch((error) => console.log(error));
    };
    getdata();
  }, [data.searchText, data.amount]);

  return (
    <div>
      <TextField
        className={classes.text}
        id="standard-basic"
        label="Seacrh for images"
        fullWidth={true}
        variant="outlined"
        color="secondary"
        value={data.searchText}
        onChange={(e) => setData({ ...data, searchText: e.target.value })}
      />
      <br />
      <InputLabel>Age</InputLabel>
      <Select
        color="secondary"
        className={classes.items}
        value={data.amount}
        onChange={(e) => setData({ ...data, amount: e.target.value })}
      >
        <MenuItem value={5}>Five</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={15}>Fifteen</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={50}>Fifty</MenuItem>
      </Select>
      <br />
      {data.images.length > 0 ? <ImagesGrid images={data.images} /> : "Loading"}
    </div>
  );
}
