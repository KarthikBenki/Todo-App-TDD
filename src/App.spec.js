import { render, screen } from "@testing-library/react";
import App from "./App";


it("should render hello world inside the component ", () => {

  const component = render(<App />);

  const componentValue = component.getByTestId("hello");

  expect(componentValue).toHaveTextContent("Hello TW");
});
