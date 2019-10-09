import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: "240px",
    padding: "8px 20px",
    margin: "20px 10px",
    boxShadow: "2px 2px 11px -4px grey"
  }
});

const makeFooterStyles = makeStyles({
  root: {
    marginTop: "6px",
    borderTop: "1px solid #03a9f4",
    paddingTop: "4px"
  }
});

export default function ListItem({ item }) {
  const classes = useStyles();
  const footerClasses = makeFooterStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      classes={{ root: classes.root }}
    >
      <div className="imagePlaceholder">
        <Link to={`/item/${item.id}`}>
          <img src={item.imgUrl} alt={item.title} />
        </Link>
      </div>
      <Box classes={{ root: footerClasses.root }} p="0px 4px">
        <Typography variant="subtitle1" component="h4">
          {item.title}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <ScheduleIcon color="primary" />
            <Typography
              style={{ marginLeft: "4px" }}
              variant="subtitle1"
              component="span"
            >
              {item.date.slice(0,9)}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <LocationOnOutlinedIcon color="primary" />
            <Typography variant="subtitle1" component="span">
              {item.location}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
