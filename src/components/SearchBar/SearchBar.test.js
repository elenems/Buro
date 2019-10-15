import React from "react";
import { shallow, mount } from "enzyme";
import SearchBar from "../SearchBar";
import Select from "@material-ui/core/Select";
import { BrowserRouter } from "react-router-dom";

describe("SearchBar", () => {
  it("Renders", () => {
    const wrapper = shallow(<SearchBar />).debug();
    expect(wrapper).toMatchSnapshot();
  });

  it("Sets region", () => {
    const wrapper = shallow(<SearchBar />);
    wrapper.find(Select).simulate("change", { target: { value: "Kyiv" } });
    expect(wrapper.find(Select).prop("value")).toBe("Kyiv");
  });

  it("Sets title", () => {
    const wrapper = shallow(<SearchBar />);
    wrapper
      .find("#search")
      .simulate("change", { target: { value: "Some value" } });
    expect(wrapper.find("#search").prop("value")).toBe("Some value");
  });

});
