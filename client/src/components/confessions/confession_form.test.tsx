import { cleanup, render, screen, waitFor } from "@testing-library/react";
import ConfessionForm from "./confession_form";
import userEvent from "@testing-library/user-event";

const mockOnConfessionSubmit = jest.fn();

beforeEach(() => {
  render(<ConfessionForm onConfessionSubmit={mockOnConfessionSubmit} />);
});

afterEach(() => {
  cleanup();
});
test("Check if button is initially disabled", () => {
  expect(screen.getByRole("button")).toBeDisabled();
});

test("type into subject, reason, and details fields and check for confess button", async () => {
  const subjectInput = screen.getByLabelText("Subject");
  const detailsTextarea = screen.getByLabelText("Details");
  await userEvent.type(subjectInput, "Subject Example");
  await userEvent.type(
    detailsTextarea,
    "These are the details of my confession, and they are more than 50 characters long."
  );

  expect(screen.getByDisplayValue("Subject Example")).toBeInTheDocument();
  expect(
    screen.getByDisplayValue(
      "These are the details of my confession, and they are more than 50 characters long."
    )
  ).toBeInTheDocument();

  const reasonSelect = screen.getByDisplayValue("--Please select an option--");
  userEvent.selectOptions(reasonSelect, "misdemeanour");

  expect(screen.getByDisplayValue("misdemeanour")).toBeInTheDocument();

  const confessButton = await screen.findByRole("button", { name: /confess/i });
  expect(confessButton).toBeInTheDocument();
});

test("Check if button is enabled when form is valid with selected option as misdemeanour", async () => {
  await userEvent.type(
    screen.getByRole("textbox", { name: /subject/i }),
    "This is a valid subject that is over ten characters"
  );
  await userEvent.type(
    screen.getByRole("textbox", { name: /details/i }),
    "These are valid details that are 50 characters long, for the purpose of passing the validation check in the test."
  );
  await userEvent.selectOptions(
    screen.getByRole("combobox", { name: /reason for contact/i }),
    "misdemeanour"
  );

  await waitFor(() => {
    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
  });
});

test("Check if button is enabled when form is valid with selected option as justTalk", async () => {
  await userEvent.type(
    screen.getByRole("textbox", { name: /subject/i }),
    "This is a valid subject that is over ten characters"
  );
  await userEvent.type(
    screen.getByRole("textbox", { name: /details/i }),
    "These are valid details that are 50 characters long, for the purpose of passing the validation check in the test."
  );
  await userEvent.selectOptions(
    screen.getByRole("combobox", { name: /reason for contact/i }),
    "justTalk"
  );

  await waitFor(() => {
    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
  });
});

test("Check if button is disabled when form fields have no inputs", () => {
  userEvent.type(screen.getByRole("textbox", { name: /subject/i }), "");
  userEvent.type(screen.getByRole("textbox", { name: /details/i }), "");
  userEvent.selectOptions(
    screen.getByRole("combobox", { name: /reason for contact/i }),
    "--Please select an option--"
  );

  expect(screen.getByRole("button")).toBeDisabled();
});

test("Check if button is disabled when form fields have invalid inputs", () => {
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

test("Check if button is disabled when subject field is short", async () => {
  const subjectInput = screen.getByRole("textbox", { name: /subject/i });
  const reasonSelect = screen.getByRole("combobox", {
    name: /reason for contact/i,
  });
  const detailsTextarea = screen.getByRole("textbox", { name: /details/i });

  userEvent.type(subjectInput, "short");
  userEvent.selectOptions(reasonSelect, ["justTalk"]);
  userEvent.type(
    detailsTextarea,
    "Details text that is more than 50 characters long. Some additional text here."
  );

  await waitFor(() => {
    expect(screen.getByRole("button", { name: /confess/i })).toBeDisabled();
  });
});

test("it successfully fetches and displays misdemeanours", async () => {
  render(<ConfessionForm onConfessionSubmit={mockOnConfessionSubmit} />);

  await waitFor(() => {
    expect(screen.getByText(/united/i)).toBeInTheDocument();
    expect(screen.getByText(/vegetables/i)).toBeInTheDocument();
    expect(screen.getByText(/rudeness/i)).toBeInTheDocument();
  });
});
