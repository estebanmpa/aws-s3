import { AbstractFactory } from "../../../../common/interfaces/factory.interface";
import { GetObjectById, GetObjectList } from "../../application/use-cases";
import { FileRepository } from "../../domain/repositories/file.repository";
import { GetObjectByIdUseCase } from "../../domain/use-cases/get-object-by-id.use-case";
import { FileRepositoryFactory } from "./file-repository.factory";

export class GetObjectByIdUseCaseFactory implements AbstractFactory<GetObjectByIdUseCase> {
    private fileRepository: FileRepository;

    constructor() {
        this.fileRepository = new FileRepositoryFactory().createObject();
    }

    createObject(): GetObjectByIdUseCase {
        return new GetObjectById(this.fileRepository);
    }
}