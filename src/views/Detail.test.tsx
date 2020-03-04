import { shallow } from "enzyme";
import React from "react";
import { Detail } from "./Detail";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("Detail view", () => {
  it("renders earthquake detail", () => {
    const wrapper = shallow(
      <Detail
        loanResponse={{ qualified: false, message: "Not qualified message." }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
