import { AbstractFactory } from "../../../../common/interfaces/factory.interface";
import { UploadObject } from "../../application/use-cases";
import { FileRepository } from "../../domain/repositories/file.repository";
import { UploadObjectUseCase } from "../../domain/use-cases/upload-object.use-case";
import { FileRepositoryFactory } from "./file-repository.factory";

export class UploadObjectUseCaseFactory implements AbstractFactory<UploadObjectUseCase> {
    private fileRepository: FileRepository;

    constructor() {
        this.fileRepository = new FileRepositoryFactory().createObject();
    }

    createObject(): UploadObjectUseCase {
        return new UploadObject(this.fileRepository);
    }
}