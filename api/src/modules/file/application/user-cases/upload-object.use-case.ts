abstract class UploadObjectUseCase {
    abstract handle(): Promise<any[]>;
  }
  
  export default class UploadObject implements UploadObjectUseCase {
    public async handle(): Promise<any[]> {
      return;
    }
  }
  