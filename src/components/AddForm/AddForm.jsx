import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function AddForm() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;
    switch (id) {
      case "title":
        setTitle(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "description":
        setDescription(value);
        break;
    }
  };

  const send = () => {

  }
  return (
    <form>
      <Typography component="h2" variant="h4">
        Розмістіть знайдену річ
      </Typography>
      <Box
        minHeight="360px"
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
      >
        <TextField
          id="title"
          label="Заголовок"
          value={title}
          onChange={handleChange}
          margin="normal"
        />
        <FormControl>
          <InputLabel htmlFor="location">Місто</InputLabel>
          <Select
            native
            value={location}
            onChange={handleChange}
            inputProps={{
              name: "location",
              id: "location"
            }}
          >
            <option value="Lviv">Львів</option>
            <option value="Kyiv">Київ</option>
            <option value="Kharkiv">Харків</option>
          </Select>
        </FormControl>
        <textarea value={description} onChange={handleChange} placeholder="Опис" id="description"></textarea>
        <Button onClick={send} color="primary">
          Відправити
        </Button>
      </Box>
    </form>
  );
}
