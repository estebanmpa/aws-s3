import { FileRepository } from "../../domain/repositories/file.repository";
import { GetObjectListUseCase } from "../../domain/use-cases/get-object-list.use-case";

export class GetObjectList implements GetObjectListUseCase {
  constructor(private readonly fileRepository: FileRepository) { }

  public handle = async (): Promise<any[]> => {
    return await this.fileRepository.getList();
  }
}
