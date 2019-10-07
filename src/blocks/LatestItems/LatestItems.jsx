import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import bagImage from "../../assets/images/bag.jpg";
import ItemsList from "../../components/ItemsList";

const items = [
  {
    id: Math.random(),
    title: "Nike bag",
    location: "Lviv",
    imageUrl: bagImage,
    date: "10-10-2019"
  },
  {
    id: Math.random(),
    title: "Nike bag",
    location: "Lviv",
    imageUrl: bagImage,
    date: "10-10-2019"
  },
  {
    id: Math.random(),
    title: "Nike bag",
    location: "Lviv",
    imageUrl: bagImage,
    date: "10-10-2019"
  },
  {
    id: Math.random(),
    title: "Nike bag",
    location: "Lviv",
    imageUrl: bagImage,
    date: "10-10-2019"
  }
];
export default function LatestItems() {
  const numberOfItems = 3;
  const slicedItems = items.slice(0, numberOfItems);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <aside>
        <Typography style={{ textAlign: "center" }} component="p" variant="h6">
          Нещодавні
        </Typography>
        <ItemsList justifyContent="center" items={slicedItems} />
      </aside>
    </Grid>
  );
}
