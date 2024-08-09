export abstract class FileRepository {
    abstract getList(): Promise<any[]>;
    abstract getById(id: string): Promise<any>;
    abstract upload(file: any): Promise<void>;
}
