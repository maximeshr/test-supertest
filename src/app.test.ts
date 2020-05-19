import supertest, { Response } from "supertest";
import { app } from "./app";

const request = supertest(app);

describe("/users/:id", () => {
  it("should return a 200 http code", async () => {
    const res = await request.get("/users/123");

    expect(res.status).toBe(200);
  });

  it("should return valid headers", async () => {
    const res = await request.get("/users/123");

    expect(res.header["content-type"]).toContain("application/json");
    expect(res.header["x-powered-by"]).toBe("Express");
  });
});
