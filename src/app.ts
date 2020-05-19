import express, { Request, Response } from "express";

export const app = express();

function getUserHandler(req: Request, res: Response) {
  res.status(200).json({ name: "John Doe" });
}

app.get("/users/:id", getUserHandler);

app.listen(3000, () =>
  console.log(`Example app listening at http://localhost:3000`)
);
