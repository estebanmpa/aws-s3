import express, { Express } from "express";
import App from "./app";

const app: Express = new App().create();
const port = process.env.PORT || 4321;


app.listen(port, () => {
  console.log(`Server listening -> http://127.0.0.1:${port}`);
});
