import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:8080/api/confess", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ success: true, message: "Confession received!" })
    );
  }),
];

[
  rest.post("http://localhost:8080/api/confess", (req, res, ctx) => {
    const { subject, reason, details } = JSON.parse(req.body as string);

    if (!subject || !reason || !details) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          message: "Missing required fields",
        })
      );
    }

    if (reason === "justTalk") {
      return res(
        ctx.json({
          success: true,
          justTalked: true,
          message: "Thank you for reaching out to us!",
        })
      );
    }

    return res(
      ctx.json({
        success: true,
        justTalked: false,
        message: "Thank you for your confession.",
      })
    );
  }),
];
