import { shallow, mount } from "enzyme";
import React from "react";
import HeaderDefault, { Header } from "./Header.jsx";
import Button from "@material-ui/core/Button";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("Renders", () => {
    const wrapper = shallow(<Header />).debug();
    expect(wrapper).toMatchSnapshot();
  });

  it("Redirects to /add", () => {
    const wrapper = mount(
      <BrowserRouter>
        <HeaderDefault />
      </BrowserRouter>
    );
    wrapper.find(Button).simulate("click");
    expect(wrapper.find("Header").prop("history").location.pathname).toBe(
      "/add"
    );
  });
});
