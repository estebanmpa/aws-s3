import { AbstractFactory } from "../../../../common/interfaces/factory.interface";
import { GetObjectList } from "../../application/use-cases";
import { FileRepository } from "../../domain/repositories/file.repository";
import { GetObjectListUseCase } from "../../domain/use-cases/get-object-list.use-case";
import { FileRepositoryFactory } from "./file-repository.factory";

export class GetObjectListUseCaseFactory implements AbstractFactory<GetObjectListUseCase> {
    private fileRepository: FileRepository;

    constructor() {
        this.fileRepository = new FileRepositoryFactory().createObject();
    }

    createObject(): GetObjectListUseCase {
        return new GetObjectList(this.fileRepository);
    }
}