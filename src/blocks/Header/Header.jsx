import React from "react";
import SearchBar from "../../components/SearchBar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto"
  }
});

function Header({ history }) {
  const classes = useStyles();

  const moveToAddPage = () => {
    history.push("/add");
  };

  return (
    <Grid classes={{ root: classes.root }} item xs={12} md={6}>
      <header>
        <Box>
          <Button
            onClick={moveToAddPage}
            variant="contained"
            color="primary"
            endIcon={<AddIcon />}
          >
            Розмістити
          </Button>
          <SearchBar />
        </Box>
      </header>
    </Grid>
  );
}

export default withRouter(Header);
