export abstract class UploadObjectUseCase {
  abstract handle(data: any): Promise<void>;
}
