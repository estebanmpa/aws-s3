import { Express } from "express";
import { App } from "./app";
import { AppConfig } from "../../common/config/app-config";

class Server {
  private app: Express = new App().create();
  private port = AppConfig.port || 4321;

  listen = () => {
    this.app.listen(this.port, this.callback);
  }

  callback = () => {
    console.log(`Server listening -> http://127.0.0.1:${this.port}`);
  }
}

new Server().listen();