import ListItem from "./ListItem";
import Box from "@material-ui/core/Box";
import React, { Component } from "react";
import axios from "axios";

export default class ItemsList extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    return axios
      .get("https://europe-west2-buro-c4d93.cloudfunctions.net/api/getItems")
      .then(data => {
        if (this.props.new) {
          this.setState({
            items: data.data.items.slice(0,3)
          });
        } else {
          this.setState({
            items: data.data.items
          });
        }
      })
      .catch(e => {});
  }
  render() {
    return (
      <Box
        display="flex"
        justifyContent={this.props.justifyContent}
        flexWrap="wrap"
      >
        {this.state.items.map(item => {
          return <ListItem key={item.id} item={item} />;
        })}
      </Box>
    );
  }
}
