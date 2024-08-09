import { FileRepository } from "../../domain/repositories/file.repository";
import { UploadObjectUseCase } from "../../domain/use-cases/upload-object.use-case";


export class UploadObject implements UploadObjectUseCase {
  constructor(private readonly fileRepository: FileRepository) { }

  public handle = async (data: any): Promise<void> => {
    return await this.fileRepository.upload(data);
  }
}
