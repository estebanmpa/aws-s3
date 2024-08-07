import { Request, Response, NextFunction } from "express";
import { GetObjectList, GetObjectById, UploadObject } from "../../application/use-cases";
import { AbstractController } from "../../../../common/interfaces/controler.interface";
import { ControllerRoute } from "../../../../common/types/route.type";


export default class FileController implements AbstractController {
  public path = '/file';
  public _getObjectList = new GetObjectList();
  private _getObjectById = new GetObjectById();
  private _uploadObject = new UploadObject();

  routes(): ControllerRoute[] {
    return [
      { method: "get", func: this.getObjectList, path: this.path },
      { method: "get", func: this.getObjectById, path: `${this.path}/:id` },
      { method: "post", func: this.uploadObject, path: this.path }
    ]
  }

  getObjectList = async (request: Request, response: Response, next: NextFunction) => {
    try {
      response.send(await this._getObjectList.handle());
    } catch (error) {
      next(error)
    }
  }

  getObjectById = async (request: Request, response: Response, next: NextFunction) => {
    try {
      response.send(await this._getObjectById.handle(""));
    } catch (error) {
      next(error)
    }
  }

  uploadObject = async (request: Request, response: Response, next: NextFunction) => {
    try {
      response.send(await this._uploadObject.handle());
    } catch (error) {
      next(error)
    }
  }
}
