import React from "react";
import ReactDOM from "react-dom";
import { act, fireEvent } from "react-dom/test-utils";

it('calls "onClick" prop on button click', () => {
  // Render new instance in every test to prevent leaking state
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick} />);

  fireEvent.click(getByText(/click me nao/i));
  expect(onClick).toHaveBeenCalled();
});
