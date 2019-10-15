import React from "react";
import { shallow } from "enzyme";
import ListItem from "../ListItem";

describe("ListItem", () => {
  it("Matches snapshot", () => {
    const props = {
        item:{
            id:1,
            title:'Some title',
            date: new Date().toLocaleDateString()
        }
    }
    const wrapper = shallow(<ListItem {...props}/>).debug();
    expect(wrapper).toMatchSnapshot();
  });
});
