import { FileRepository } from "../../domain/repositories/file.repository";
import { GetObjectByIdUseCase } from "../../domain/use-cases/get-object-by-id.use-case";


export class GetObjectById implements GetObjectByIdUseCase {
  constructor(private readonly fileRepository: FileRepository) { }

  public handle = async (id: string): Promise<any> => {
    return await this.fileRepository.getById(id);
  }
}
