abstract class GetObjectByIdUseCase {
  abstract handle(id: string): Promise<any>;
}

export class GetObjectById implements GetObjectByIdUseCase {
  public async handle(id: string): Promise<any> {
    return;
  }
}
