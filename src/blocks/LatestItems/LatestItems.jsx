import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ItemsList from "../../components/ItemsList";

export default function LatestItems() {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <aside>
        <Typography style={{ textAlign: "center" }} component="p" variant="h6">
          Нещодавні
        </Typography>
        <ItemsList justifyContent="center" new={true} />
      </aside>
    </Grid>
  );
}
