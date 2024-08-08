import { GetObjectListUseCase } from "../../domain/use-cases/get-object-list.use-case";

export class GetObjectList implements GetObjectListUseCase {
  public handle = async (): Promise<any[]> => {
    return [];
  }
}
