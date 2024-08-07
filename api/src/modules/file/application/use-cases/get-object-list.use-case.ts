abstract class GetObjectListUseCase {
  abstract handle(): Promise<any[]>;
}

export class GetObjectList implements GetObjectListUseCase {
  public handle = async (): Promise<any[]> => {
    return [];
  }
}
