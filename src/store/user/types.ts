export interface User {
  email: string;
  name: string;
}

export interface UserSliceState {
  isLogin: boolean;
  user: User | null;
  accessToken: string;
}
