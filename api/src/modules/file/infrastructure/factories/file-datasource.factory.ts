import { AbstractFactory } from "../../../../common/interfaces/factory.interface";
import { AbstractMulterService, MulterService } from "../../../../infrastructure/multer/multer.service";
import { FileDatasourceImpl } from "../../application/datasources/file.datasource";
import { FileDatasource } from "../../domain/datasources/file.datasource";

export class FileDatasourceFactory implements AbstractFactory<FileDatasource> {
    private multerService: AbstractMulterService;

    constructor() {
        this.multerService = new MulterService();
    }

    createObject(): FileDatasource {
        return new FileDatasourceImpl(this.multerService);
    }
}