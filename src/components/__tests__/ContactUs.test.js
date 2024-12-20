import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load button inside component", () => {
  render(<ContactUs />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("Should load input name inside component", () => {
  render(<ContactUs />);
  const button = screen.getByPlaceholderText("Name");
  expect(button).toBeInTheDocument();
});

test("Should load two input boxes on the Component", () => {
  render(<ContactUs></ContactUs>);

  const inputs = screen.getAllByRole("textbox");
  expect(inputs.length).toBe(2);
});
