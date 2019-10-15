import React from "react";
import { shallow } from "enzyme";
import ItemsList from "../ItemsList";


describe("ItemsList", () => {

    it("Matches snapshot", () => {
    const wrapper = shallow(<ItemsList />).debug();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders at least one ListItem", () => {
    const wrapper = shallow(<ItemsList />);
    wrapper.setState({ items: [{ id: 1, title: "Title" }] });
    expect(wrapper.find("ListItem").length).toBeGreaterThan(0);
  });

  it("Ss", () => {
    const wrapper = shallow(<ItemsList />);
    wrapper.instance().componentDidMount();
  });
});
