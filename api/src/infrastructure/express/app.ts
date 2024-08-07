import express, { Express, Router } from "express";
import FileController from "../../modules/file/infrastructure/controllers/file.controller";

abstract class AbstractApp {
  abstract create(): Express;
}

export default class App implements AbstractApp {
  private app: Express;
  private router: Router = express.Router();

  constructor() {
    this.app = express();
  }

  create(): Express {
    this.initControllers();

    return this.app;
  }

  private initControllers() {
    const controllers = [new FileController()];

    controllers.forEach(c => {
      c.routes().forEach(r => {
        this.router[r.method](r.path, r.func);
        console.log(`${r.method} -> ${r.path}`);
      })
    });
    this.app.use('/api', this.router);
  }
}
