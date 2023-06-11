export interface LoginAxiosResponse {
  email: string;
  name: string;
  accessToken: string;
}
export type RegisterResponse = LoginAxiosResponse;

export interface AxiosErrorResponse {
  statusCode: number;
  message: string;
  path: string;
  timestamp: string;
}
