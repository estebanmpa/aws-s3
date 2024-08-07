abstract class UploadObjectUseCase {
    abstract handle(): Promise<any>;
  }
  
  export class UploadObject implements UploadObjectUseCase {
    public async handle(): Promise<any> {
      return;
    }
  }
  