import { FileDatasource } from "../../domain/datasources/file.datasource";
import { FileRepository } from "../../domain/repositories/file.repository";

export class FileRepositoryImpl implements FileRepository {
    constructor(private readonly fileDatasource: FileDatasource) { }

    getList = async (): Promise<any[]> => {
        return await this.fileDatasource.getList();
    }

    getById = async (id: string): Promise<any> => {
        return await this.getById(id);
    }

    upload = async (file: any): Promise<void> => {
        return await this.upload(file);
    }

}
