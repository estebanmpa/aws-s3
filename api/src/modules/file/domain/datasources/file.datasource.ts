export abstract class FileDatasource {
    abstract getList(): Promise<any[]>;
    abstract getById(id: string): Promise<any>;
    abstract upload(data: any): Promise<void>;
}
