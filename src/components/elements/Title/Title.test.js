import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("When Title component render correctly", () => {
  test("Should render a h1 tag", () => {
    render(<Title>Test</Title>);

    const title = screen.getByRole("heading");

    expect(title).toBeInTheDocument();
  });
});
