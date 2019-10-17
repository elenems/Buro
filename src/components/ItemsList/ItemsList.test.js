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

  it("Sets items to state after request", async () => {
    const wrapper = shallow(<ItemsList />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('items').length).toBeGreaterThan(0);
  });
});
