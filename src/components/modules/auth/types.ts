export interface SubmitHandlerProp<T> {
  onSubmitHandler: (data: T) => Promise<void>;
}
