import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("When Button component render correctly", () => {
  test("Should render a button tag", () => {
    render(
      <Button title="click here" type="submit">
        Test
      </Button>,
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should show a specific title", () => {
    render(
      <Button title="click here" type="submit">
        Test
      </Button>,
    );

    const button = screen.getByRole("button");

    expect(button.title).toBe("click here");
  });

  test("Should have a specific children", () => {
    render(
      <Button title="click here" type="submit">
        Test Button
      </Button>,
    );

    const button = screen.getByText("Test Button");

    expect(button).toBeInTheDocument();
  });
});
