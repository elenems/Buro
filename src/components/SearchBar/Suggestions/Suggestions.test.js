import React from "react";
import { shallow, mount } from "enzyme";
import Suggestions from "../Suggestions";
import { BrowserRouter } from "react-router-dom";

describe("Suggestions", () => {
  it("Renders", () => {
    const wrapper = shallow(<Suggestions />).debug();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders suggestions on passed data", () => {
    const props = {
      items: [{ id: 0, title: "First" }, { id: 1, title: "Second" }]
    };
    const wrapper = mount(
      <BrowserRouter>
        <Suggestions {...props} />
      </BrowserRouter>
    );
    expect(wrapper.find("Link").length).toBeGreaterThan(0);
  });
});
