import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Item extends Component {
  state = {
    item: null,
    message: ""
  };

  showMessage = () => {
    this.setState({
      message: "Успішно відправлено"
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(
        `https://europe-west2-buro-c4d93.cloudfunctions.net/api/getItem?itemId=${id}`
      )
      .then(data => {
        this.setState({
          item: data.data
        });
      })
      .catch(e => {});
  }

  render() {
    console.log(this.state.item);
    return this.state.item === null ? null : (
      <Grid style={{ margin: "auto" }} item xs={12} md={6}>
        <Box>
          <main>
            <Box display="flex">
              <div className="image-placeholder-big">
                <img src={this.state.item.imgUrl} alt={this.state.title} />
              </div>
              <div>
                <Box mb="20px">
                  <Typography variant="h4" component="h1">
                    <b>Загублено:</b> {this.state.item.title}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <ScheduleIcon color="primary" />
                  <Typography
                    style={{ marginLeft: "4px" }}
                    variant="subtitle1"
                    component="span"
                  >
                    {this.state.item.date.slice(0, 9)}
                  </Typography>
                </Box>
                <Box mt="10px" display="flex" alignItems="center">
                  <LocationOnOutlinedIcon color="primary" />
                  <Typography variant="subtitle1" component="span">
                    {this.state.item.location[0].toUpperCase() +
                      this.state.item.location.slice(1)}
                  </Typography>
                </Box>
                <Typography component="p" variant="subtitle1">
                  {this.state.item.description}
                </Typography>
              </div>
            </Box>
            <Box mt="16px">
              <textarea placeholder="Ваше повідомлення"></textarea>
              <Button

                onClick={this.showMessage}
                color="primary"
                style={{
                  marginTop: "24px",
                  padding: "12px",
                  width: "100%",
                  border: "1px solid #03a9f4"
                }}
              >
                Відправити
              </Button>

              {this.state.message.length ? (
                <Typography variant='h6' component='p' color="secondary">{this.state.message}</Typography>
              ) : null}
            </Box>
          </main>
        </Box>
      </Grid>
    );
  }
}

export default withRouter(Item);
