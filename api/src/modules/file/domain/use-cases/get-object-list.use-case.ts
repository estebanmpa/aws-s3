export abstract class GetObjectListUseCase {
  abstract handle(): Promise<any[]>;
}
