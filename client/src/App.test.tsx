import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("App rendered and default to homepage", () => {
  render(<App />);

  const homeElement = screen.getByRole("main");

  expect(homeElement).toBeInTheDocument();
  expect(homeElement.textContent).toContain("Welcome");
});

test("App renders with a header containing title and links", () => {
  render(<App />);

  const headerElement = screen.getByRole("banner");
  const title = screen.getByRole("heading", { level: 1 });
  const homeLink = screen.getByRole("link", { name: /Home/i });
  const misdemeanorLink = screen.getByRole("link", { name: /Misdemeanours/i });
  const confessionLink = screen.getByRole("link", { name: /Confess To Us/i });

  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toContainElement(title);
  expect(headerElement).toContainElement(homeLink);
  expect(headerElement).toContainElement(misdemeanorLink);
  expect(headerElement).toContainElement(confessionLink);
});
