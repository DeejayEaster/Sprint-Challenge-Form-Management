import React from "react";
import { render } from "@testing-library/react";
import FormikApp from "../components/FormikApp";

describe("<FormikApp />", () => {
  it("renders without crashing", () => {
    render(<FormikApp />);
  });
  it("submit", () => {
    const { getByText }
  });
});
