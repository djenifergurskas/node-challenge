import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/users", (req: Request, res: Response) => {
  res.send("Ok!");
});

app.listen(3000, () => console.log("Listenning on port 3000!"));
