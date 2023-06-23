export interface MenuOrderState {
  currentMainMenuOrder: number;
  currentSubMenuOrder: number;
}
export interface ProductImagesState {
  images: File[];
}
export interface User {
  uuid: string;
  email: string;
  name: string;
}

export interface UserSliceState {
  status: 'loading' | 'error' | 'success' | null;
  user: User | null;
  accessToken: string;
}
