import { GetObjectByIdUseCase } from "../../domain/use-cases/get-object-by-id.use-case";


export class GetObjectById implements GetObjectByIdUseCase {
  public handle = async (id: string): Promise<any> => {
    return;
  }
}
