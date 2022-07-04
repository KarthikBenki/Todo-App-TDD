import { getByTestId, render } from "@testing-library/react";
import React from "react";
import Form from "./Form";

describe("ToDo list entry form tests", () => {
  it("should render What needs to be done? ", () => {
    const { getByTestId } = render(<Form />);

    expect(getByTestId("form-header")).toHaveTextContent(
      "What needs to be done?"
    );
  });
});
