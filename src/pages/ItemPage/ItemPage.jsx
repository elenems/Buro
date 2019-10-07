import React from "react";
import Header from "../../blocks/Header";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Item from '../../blocks/Item';

export default function ItemPage() {
  return (
    <Container fixed>
      <Grid container spacing={6}>
        <Header />
        <Item />
      </Grid>
    </Container>
  );
}
