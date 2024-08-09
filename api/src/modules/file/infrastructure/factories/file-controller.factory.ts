import { AbstractFactory } from "../../../../common/interfaces/factory.interface";
import { GetObjectByIdUseCase } from "../../domain/use-cases/get-object-by-id.use-case";
import { GetObjectListUseCase } from "../../domain/use-cases/get-object-list.use-case";
import { UploadObjectUseCase } from "../../domain/use-cases/upload-object.use-case";
import { FileController } from "../controllers/file.controller";
import { GetObjectByIdUseCaseFactory } from "./get-object-by-id-use-case.factory";
import { GetObjectListUseCaseFactory } from "./get-object-list-use-case.factory";
import { UploadObjectUseCaseFactory } from "./upload-object-use-case.factory";

export class FileControllerFactory implements AbstractFactory<FileController> {
    private getObjectListUseCase: GetObjectListUseCase;
    private getObjectByIdUseCase: GetObjectByIdUseCase;
    private uploadObjectUseCase: UploadObjectUseCase;

    constructor() {
        this.getObjectListUseCase = new GetObjectListUseCaseFactory().createObject();
        this.getObjectByIdUseCase = new GetObjectByIdUseCaseFactory().createObject();
        this.uploadObjectUseCase = new UploadObjectUseCaseFactory().createObject();
    }

    createObject = (): FileController => {
        return new FileController(this.getObjectListUseCase, this.getObjectByIdUseCase, this.uploadObjectUseCase);
    }
}