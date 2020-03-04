import { shallow } from "enzyme";
import React from "react";
import { Main } from "./Main";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("Main view", () => {
  it("renders", () => {
    const wrapper = shallow(
      <Main loanResponse={null} handleSetLoanResponse={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
