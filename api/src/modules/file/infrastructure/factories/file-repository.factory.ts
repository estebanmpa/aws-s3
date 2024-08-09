import { AbstractFactory } from "../../../../common/interfaces/factory.interface";
import { FileRepositoryImpl } from "../../application/repositories/file.repository";
import { FileDatasource } from "../../domain/datasources/file.datasource";
import { FileRepository } from "../../domain/repositories/file.repository";
import { FileDatasourceFactory } from "./file-datasource.factory";

export class FileRepositoryFactory implements AbstractFactory<FileRepository> {
    private fileDatasource: FileDatasource;

    constructor() {
        this.fileDatasource = new FileDatasourceFactory().createObject();
    }

    createObject(): FileRepository {
        return new FileRepositoryImpl(this.fileDatasource);
    }
}