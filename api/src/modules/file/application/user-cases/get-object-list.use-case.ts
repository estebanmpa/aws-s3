abstract class GetObjectListUseCase {
  abstract handle(): Promise<any[]>;
}

export default class GetObjectList implements GetObjectListUseCase {
  public async handle(): Promise<any[]> {
    return [];
  }
}
