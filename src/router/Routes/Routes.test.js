import React from "react";
import { shallow } from "enzyme";
import Routes from "../Routes";
import ItemPage from "../../pages/ItemPage";

describe("Routes", () => {
  it("Renders ItemPage on /item:id route", () => {
    const wrapper = shallow(<Routes />);
    const route = wrapper.findWhere(n => n.prop("path") === "/item/:id");
    const props = {
      match: {
        params: {
          id: "1"
        }
      }
    };
    expect(route.prop("render")(props).type).toEqual(ItemPage);
  });
});
