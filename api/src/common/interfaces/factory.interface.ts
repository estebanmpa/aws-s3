export default abstract class AbstractFactory<T> {
    abstract createObject(): T;
}
