export interface LoginAxiosResponse {
  uuid: string;
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
