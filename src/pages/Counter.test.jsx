import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("число растёт после клика", async () => {
  render(<Counter />);

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Клики: 0");

  await userEvent.click(button);

  expect(button).toHaveTextContent("Клики: 1");
});