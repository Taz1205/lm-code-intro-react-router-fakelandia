import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:8080/api/misdemeanours/5", (_req, res, ctx) => {
    return res(
      ctx.json({
        misdemeanours: [
          {
            citizenId: 11276,
            misdemeanour: "united",
            date: "30/07/2023",
          },
          {
            citizenId: 11397,
            misdemeanour: "vegetables",
            date: "30/07/2023",
          },
          {
            citizenId: 9685,
            misdemeanour: "rudeness",
            date: "30/07/2023",
          },
          {
            citizenId: 3880,
            misdemeanour: "rudeness",
            date: "30/07/2023",
          },
          {
            citizenId: 19561,
            misdemeanour: "united",
            date: "30/07/2023",
          },
        ],
      })
    );
  }),
];
