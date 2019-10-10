import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Suggestions extends Component {
  render() {
    return (
      <div className="suggestions">
        {this.props.items.map(item => {
          return (
            <div key={item.id}>
              <Link to={`/item/${item.id}`}>{item.title}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Suggestions);
