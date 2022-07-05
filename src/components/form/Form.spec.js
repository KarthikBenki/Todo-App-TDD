import { fireEvent, getByTestId, render } from "@testing-library/react";
import React from "react";
import Form from "./Form";

describe("ToDo list entry form tests", () => {
  it("should render What needs to be done? ", () => {
    const { getByTestId } = render(<Form />);

    expect(getByTestId("form-header")).toHaveTextContent(
      "What needs to be done?"
    );
  });

  it("should render different attributes", () => {
    const { getByTestId } = render(<Form />);

    expect(getByTestId("form-input")).toHaveAttribute("type");
    expect(getByTestId("form-input")).toHaveAttribute("placeholder","What you want to do today");
    expect(getByTestId("form-input")).toHaveAttribute("autoComplete");
  });

  it("should render Add text inside button", () => {
    const { getByTestId } = render(<Form />);

    expect(getByTestId("form-button")).toHaveTextContent("Add");
    expect(getByTestId("form-button")).toHaveAttribute("type");
    expect(getByTestId("form-button")).not.toHaveAttribute("disabled");
  });
});


