import React from "react";
import SearchBar from "../../components/SearchBar";
import Grid from "@material-ui/core/Grid";

export default function Header() {
  return (
    <Grid item xs={12}>
      <header>
        <SearchBar />
      </header>
    </Grid>
  );
}
