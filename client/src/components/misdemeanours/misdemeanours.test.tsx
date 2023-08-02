import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Misdemeanour from "./misdemeanours";

const queryClient = new QueryClient();

const server = setupServer(
  rest.get(
    "http://localhost:8080/api/misdemeanours/:amount",
    (req, res, ctx) => {
      const amount = Number(req.params.amount);
      if (isNaN(amount)) {
        return res(ctx.status(400));
      }
      return res(
        ctx.json(
          new Array(amount).fill({
            citizenId: 1720,
            misdemeanour: "united",
            date: "29/07/2023",
          })
        )
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders loading state", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Misdemeanour />
    </QueryClientProvider>
  );
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("renders error state", async () => {
  server.use(
    rest.get(
      "http://localhost:8080/api/misdemeanours/:amount",
      (req, res, ctx) => {
        return res(ctx.status(500));
      }
    )
  );

  render(
    <QueryClientProvider client={queryClient}>
      <Misdemeanour />
    </QueryClientProvider>
  );
  expect(await screen.findByText("Error")).toBeInTheDocument();
});

test("renders misdemeanour data", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Misdemeanour />
    </QueryClientProvider>
  );
  expect(await screen.findByText("united")).toBeInTheDocument();
});
