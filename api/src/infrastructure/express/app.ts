import express, { Express } from "express";
import FileController from "../../modules/file/infrastructure/controllers/file.controller";

abstract class AbstractApp {
  abstract create(): Express;
}

const constrollers = [new FileController()];

export default class App implements AbstractApp {
  private app: Express;

  constructor() {
    this.app = express();
  }

  create(): Express {
    throw new Error("Method not implemented.");
  }
}
