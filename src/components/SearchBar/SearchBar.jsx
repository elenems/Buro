import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import Suggestions from "./Suggestions";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
export default function SearchBar() {
  const classes = useStyles();
  const [region, setRegion] = useState("Lviv");
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = e => {
    const region = e.target.value;
    setRegion(region);
  };

  useEffect(()=>{
    if(title.length){
    axios
    .post(
      "https://europe-west2-buro-c4d93.cloudfunctions.net/api/getItemsFromSearch",
      {
        text: title
      }
    )
    .then(data => {
      const items = data.data.items;
      // const itemsByRegion = items.filter((item)=>{
      //   return item.location.toLowerCase() === region.toLocaleLowerCase();
      // })
      setItems(data.data.items);
    })
  }else{
    setItems([]);
  }
  },[title])

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };
  return (
    <Box
      style={{ position: "relative" }}
      display="flex"
      justifyContent="center"
      alignItems="baseline"
    >
      <FormControl className={classes.formControl}>
        <Select value={region} name="region" onChange={handleChange} autoWidth>
          <MenuItem value="Lviv">Львів</MenuItem>
          <MenuItem value="Kharkiv">Харків</MenuItem>
          <MenuItem value="Kyiv">Київ</MenuItem>
        </Select>
        <FormHelperText>Регіон</FormHelperText>
      </FormControl>
      <TextField
      autoComplete="off"
        fullWidth={true}
        id="search"
        label="Шукати майно"
        type="search"
        margin="normal"
        value={title}
        onChange={handleTitleChange}
      />

      <IconButton color="primary" aria-label="Search">
        <SearchIcon />
      </IconButton>

      <Suggestions items={items} />
    </Box>
  );
}
