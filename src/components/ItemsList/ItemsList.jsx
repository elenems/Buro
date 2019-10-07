import React from "react";
import ListItem from "./ListItem";
import Box from "@material-ui/core/Box";

export default function ItemsList(props) {
  return (
    <Box display="flex" justifyContent={props.justifyContent} flexWrap="wrap">
      {props.items.map(item => {
        return <ListItem key={item.id} item={item} />;
      })}
    </Box>
  );
}
