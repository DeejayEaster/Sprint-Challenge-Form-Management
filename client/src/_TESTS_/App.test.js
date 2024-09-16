import React from "react";
import App from "../App";
import { render } from "@testing-library/react";
import { isMainThread } from "worker_threads";

describe("<App />", () => {
  it("reders without crashing", () => {
    render(<App />);
  });
});
