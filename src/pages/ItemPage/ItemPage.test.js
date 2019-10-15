import React from "react";
import { shallow } from "enzyme";
import ItemPage from "../ItemPage";

describe("ItemPage", () => {
  it("Matches snapshot", () => {
    const wrapper = shallow(<ItemPage />).debug();
    expect(wrapper).toMatchSnapshot();
  });
});
