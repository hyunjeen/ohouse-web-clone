export interface AuthResponse {
  user: {
    uuid: string;
    name: string;
    email: string;
  };
  accessToken: string;
}
export interface AxiosErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}
