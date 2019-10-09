import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ItemsList from "../../components/ItemsList";

export default function HomeMain() {
  return (
    <Grid item xs={12} sm={6} md={8}>
      <main>
        <Typography component="p" variant="h6">
          Усі
        </Typography>
        <ItemsList new={false}/>
      </main>
    </Grid>
  );
}
