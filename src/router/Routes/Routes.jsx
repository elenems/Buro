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
        <Route path="/item/:id" component={ItemPage} />
        <Route path="/add" component={AddItemPage} />
      </Switch>
    </BrowserRouter>
  );
}
