export interface LoginInputData {
  email: string;
  password: string;
}

export interface RegisterInputData {
  name: string;
  email: string;
  password: string;
  password1?: string;
}

export interface SubmitHandlerProp<T> {
  onSubmitHandler: (data: T) => Promise<void>;
}
