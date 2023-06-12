export interface MenuOrderState {
  currentMainMenuOrder: number;
  currentSubMenuOrder: number;
}
export interface User {
  uuid: string;
  email: string;
  name: string;
}

export interface UserSliceState {
  isLogin: boolean;
  user: User | null;
  accessToken: string;
}
