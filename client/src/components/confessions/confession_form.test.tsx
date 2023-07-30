import { render, screen, waitFor } from "@testing-library/react";
import ConfessionForm from "./confession_form";
import userEvent from "@testing-library/user-event";

test("Check if button is initially disabled", () => {
  render(<ConfessionForm />);
  expect(screen.getByRole("button")).toBeDisabled();
});

test("Check if button is disabled when form fields have no inputs", () => {
  render(<ConfessionForm />);

  userEvent.type(screen.getByRole("textbox", { name: /subject/i }), "");
  userEvent.type(screen.getByRole("textbox", { name: /details/i }), "");
  userEvent.selectOptions(
    screen.getByRole("combobox", { name: /reason for contact/i }),
    "--Please select an option--"
  );

  expect(screen.getByRole("button")).toBeDisabled();
});
test("Check if button is disabled when form fields have invalid inputs", () => {
  render(<ConfessionForm />);

  userEvent.type(screen.getByRole("textbox", { name: /subject/i }), "Invalid");
  userEvent.type(
    screen.getByRole("textbox", { name: /details/i }),
    "Invalid details"
  );
  userEvent.selectOptions(
    screen.getByRole("combobox", { name: /reason for contact/i }),
    "--Please select an option--"
  );

  expect(screen.getByRole("button")).toBeDisabled();
});

test("Check if button is disabled when subject field is empty", async () => {
  render(<ConfessionForm />);

  const subjectInput = screen.getByRole("textbox", { name: /subject/i });
  const reasonSelect = screen.getByRole("combobox", {
    name: /reason for contact/i,
  });
  const detailsTextarea = screen.getByRole("textbox", { name: /details/i });

  userEvent.type(subjectInput, "");
  userEvent.selectOptions(reasonSelect, ["justTalk"]);
  userEvent.type(
    detailsTextarea,
    "Details text that is more than 50 characters long. Some additional text here."
  );

  await waitFor(() => {
    expect(screen.getByRole("button", { name: /confess/i })).toBeDisabled();
  });
});
