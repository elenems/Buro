import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "../../assets/images/bag.jpg";
import Typography from "@material-ui/core/Typography";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    marginTop:'24px',
    padding:'12px',
    width:'100%',
    border:'1px solid #03a9f4'
  },
  input: {
    display: "none"
  }
});
export default function Item() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Box m="auto" width={2 / 4}>
        <main>
          <Box display="flex">
            <div className="image-placeholder-big">
              <img src={Image} alt="alt" />
            </div>
            <div>
              <Box mb="20px">
                <Typography variant="h4" component="h1">
                  <b>Загублено:</b> Nike air bag with pockets
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <ScheduleIcon color="primary" />
                <Typography
                  style={{ marginLeft: "4px" }}
                  variant="subtitle1"
                  component="span"
                >
                  20-10-2019
                </Typography>
              </Box>
              <Box mt="10px" display="flex" alignItems="center">
                <LocationOnOutlinedIcon color="primary" />
                <Typography variant="subtitle1" component="span">
                  Lviv
                </Typography>
              </Box>
              <Typography component="p" variant="subtitle1">
                Знайдено торбу біля ашану, всередині бички без фільтра
              </Typography>
            </div>
          </Box>
          <Box mt="16px">
            <textarea placeholder="Ваше повідомлення"></textarea>
            <Button color="primary" className={classes.button}>
              Відправити
            </Button>
          </Box>
        </main>
      </Box>
    </Grid>
  );
}
