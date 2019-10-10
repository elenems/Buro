import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ItemPage from "../../pages/ItemPage";
import AddItemPage from '../../pages/AddItemPage';
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/add" component={AddItemPage} />
        <Route path="/item/:id" render={props => (
            <ItemPage key={props.match.params.id} {...props} />
          )} />
      </Switch>
    </BrowserRouter>
  );
}
