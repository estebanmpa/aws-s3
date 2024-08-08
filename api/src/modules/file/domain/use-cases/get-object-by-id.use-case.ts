export abstract class GetObjectByIdUseCase {
    abstract handle(id: string): Promise<any>;
}