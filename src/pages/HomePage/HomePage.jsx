import React from "react";
import Header from "../../blocks/Header";
import Container from "@material-ui/core/Container";
import LatestItems from "../../blocks/LatestItems";
import HomeMain from "../../blocks/HomeMain";
import Grid from "@material-ui/core/Grid";
function HomePage() {
  return (
    <Container fixed>
      <Grid container spacing={6}>
        <Header />
        <HomeMain />
        <LatestItems />
      </Grid>
    </Container>
  );
}

export default HomePage;
