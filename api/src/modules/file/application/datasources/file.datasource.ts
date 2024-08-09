import { AbstractMulterService } from '../../../../infrastructure/multer/multer.service';
import { FileDatasource } from '../../domain/datasources/file.datasource';

export class FileDatasourceImpl implements FileDatasource {
    constructor(private readonly multerService: AbstractMulterService) { }

    getList = async (): Promise<any[]> => {
        throw new Error("Method not implemented.");
    }

    getById = async (id: string): Promise<any> => {
        throw new Error("Method not implemented.");
    }

    upload = async (data: any): Promise<void> => {
        return await this.multerService.upload(data);
    }
}
