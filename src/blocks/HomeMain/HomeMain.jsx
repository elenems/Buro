import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ItemsList from "../../components/ItemsList";
import bagImage from '../../assets/images/bag.jpg'
const items = [{
  id:Math.random(),
  title:"Nike bag",
  location:'Lviv',
  imageUrl:bagImage,
  date:"10-10-2019"
},{
  id:Math.random(),
  title:"Nike bag",
  location:'Lviv',
  imageUrl:bagImage,
  date:"10-10-2019"
},{
  id:Math.random(),
  title:"Nike bag",
  location:'Lviv',
  imageUrl:bagImage,
  date:"10-10-2019"
},{
  id:Math.random(),
  title:"Nike bag",
  location:'Lviv',
  imageUrl:bagImage,
  date:"10-10-2019"
}];

export default function HomeMain() {
  return (
    <Grid item xs={12} sm={6} md={8}>
      <main>
        <Typography component="p" variant="h6">
          Усі
        </Typography>
        <ItemsList items={items}/>
      </main>
    </Grid>
  );
}
