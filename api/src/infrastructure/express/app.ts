import express, { Express, Router } from "express";
import { FileControllerFactory } from "../../modules/file/infrastructure/factories/file-controller.factory";

abstract class AbstractApp {
  abstract create(): Express;
}

export class App implements AbstractApp {
  private app: Express;
  private router: Router = express.Router();

  constructor() {
    this.app = express();
  }

  create = (): Express => {
    this.initControllers();

    return this.app;
  }

  private initControllers = () => {
    const controllers = [new FileControllerFactory().createObject()];

    controllers.forEach(c => {
      c.routes().forEach(r => {
        this.router[r.method](r.path, r.func);
        console.log(`${r.method} -> ${r.path}`);
      })
    });
    this.app.use('/api', this.router);
  }
}
