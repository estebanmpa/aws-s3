import { Request, Response, NextFunction, Router } from "express";
import { GetObjectList, GetObjectById, UploadObject } from "../../application/user-cases"

export default class FileController {
  public path = '/product';
  public router = Router();
  private _getObjectList: GetObjectList;
  private _getObjectById: GetObjectById;
  private _uploadObject: UploadObject;

  constructor() {
    this._getObjectList = new GetObjectList();
    this._getObjectById = new GetObjectById();
    this._uploadObject = new UploadObject();
  }

  async getObjectList(request: Request, response: Response, next: NextFunction): Promise<any[]> {
    return this._getObjectList.handle();
  }

  async getObjectById(request: Request, response: Response, next: NextFunction): Promise<any[]> {
    return this._getObjectById.handle(0);
  }

  async uploadObject(request: Request, response: Response, next: NextFunction): Promise<any[]> {
    return this._uploadObject.handle();
  }
}
