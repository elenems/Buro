import React from "react";
import { shallow, mount } from "enzyme";
import AddForm from "../AddForm";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { wrap } from "module";

describe("AddForm", () => {
  it("Matches snapshot", () => {
    const wrapper = shallow(<AddForm />).debug();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders error text on error", () => {
    const wrapper = shallow(<AddForm />);
    wrapper.find(Button).simulate("click", { preventDefault: () => {} });
    expect(
      wrapper.findWhere(
        n => n.text() === "Завантажте фото" && n.prop("color") === "error"
      ).length
    ).toBe(1);
  });

  it("Renders message on success", () => {
    const wrapper = shallow(<AddForm />);
    wrapper.update();
    wrapper
      .findWhere(n => n.prop("type") === "file")
      .simulate("change", {
        target: {
          files: [{ file: {} }]
        }
      });
    wrapper.find(Button).simulate("click", { preventDefault: () => {} });
  });

  it("Sets new title", () => {
    const wrapper = shallow(<AddForm />);
    wrapper.find(TextField).simulate("change", {
      target: {
        id: "title",
        value: "New title"
      }
    });
    expect(wrapper.find(TextField).prop('value')).toBe('New title');
  });

  it("Sets new lcoation", ()=>{
    const wrapper = shallow(<AddForm />);
    wrapper.find(Select).simulate('change',{target: {
        id: "location",
        value: "Kharkiv"
      }})
    expect(wrapper.find(Select).prop('value')).toBe("Kharkiv")
  })

  it("Sets new description", ()=>{
    const wrapper = shallow(<AddForm />);
     wrapper.find('#description').simulate('change',{
        target: {
            id: "description",
            value: "New description"
          }
     })
     expect(wrapper.find('#description').prop('value')).toBe('New description');
  })
});
