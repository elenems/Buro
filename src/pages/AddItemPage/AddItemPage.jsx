import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../../blocks/Header";
import AddForm from "../../components/AddForm";

export default function AddItemPage() {
  return (
    <Container fixed>
      <Grid justify='center' container spacing={6}>
        <Grid item>
          <AddForm />
        </Grid>
      </Grid>
    </Container>
  );
}
