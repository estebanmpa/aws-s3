import { Request, Response, NextFunction } from "express";
import { AbstractController } from "../../../../common/interfaces/controler.interface";
import { ControllerRoute } from "../../../../common/types/route.type";
import { GetObjectListUseCase } from "../../domain/use-cases/get-object-list.use-case";
import { GetObjectByIdUseCase } from "../../domain/use-cases/get-object-by-id.use-case";
import { UploadObjectUseCase } from "../../domain/use-cases/upload-object.use-case";


export class FileController implements AbstractController {
  private path = '/file';

  constructor(
    private readonly getObjectListUseCase: GetObjectListUseCase,
    private readonly getObjectByIdUseCase: GetObjectByIdUseCase,
    private readonly uploadObjectUseCase: UploadObjectUseCase
  ) { }

  routes = (): ControllerRoute[] => {
    return [
      { method: "get", func: this.getObjectList, path: this.path },
      { method: "get", func: this.getObjectById, path: `${this.path}/:id` },
      { method: "post", func: this.uploadObject, path: this.path }
    ]
  }

  getObjectList = async (request: Request, response: Response, next: NextFunction) => {
    try {
      response.send(await this.getObjectListUseCase.handle());
    } catch (error) {
      next(error)
    }
  }

  getObjectById = async (request: Request, response: Response, next: NextFunction) => {
    try {
      response.send(await this.getObjectByIdUseCase.handle(""));
    } catch (error) {
      next(error)
    }
  }

  uploadObject = async (request: Request, response: Response, next: NextFunction) => {
    try {
      response.send(await this.uploadObjectUseCase.handle({}));
    } catch (error) {
      next(error)
    }
  }
}
