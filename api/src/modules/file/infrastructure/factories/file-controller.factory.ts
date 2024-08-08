import AbstractFactory from "../../../../common/interfaces/factory.interface";
import { GetObjectById, GetObjectList, UploadObject } from "../../application/use-cases";
import { GetObjectByIdUseCase } from "../../domain/use-cases/get-object-by-id.use-case";
import { GetObjectListUseCase } from "../../domain/use-cases/get-object-list.use-case";
import { UploadObjectUseCase } from "../../domain/use-cases/upload-object.use-case";
import { FileController } from "../controllers/file.controller";

export class FileControllerFactory implements AbstractFactory<FileController> {
    private getObjectListUseCase: GetObjectListUseCase;
    private getObjectByIdUseCase: GetObjectByIdUseCase;
    private uploadObjectUseCase: UploadObjectUseCase;

    constructor() {
        this.getObjectListUseCase = new GetObjectList();
        this.getObjectByIdUseCase = new GetObjectById();
        this.uploadObjectUseCase = new UploadObject();
    }

    createObject = (): FileController => {
        return new FileController(this.getObjectListUseCase, this.getObjectByIdUseCase, this.uploadObjectUseCase);
    }
}