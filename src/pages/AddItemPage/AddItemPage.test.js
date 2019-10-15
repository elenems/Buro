import React from "react";
import { shallow } from "enzyme";
import AddItemPage from "../AddItemPage";

describe("Add Item Page", () => {
  it("Matches snapshot", () => {
    const wrapper = shallow(<AddItemPage />).debug();
    expect(wrapper).toMatchSnapshot();
  });
});
