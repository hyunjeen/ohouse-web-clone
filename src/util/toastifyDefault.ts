import { toast } from 'react-toastify';

export const toastifyDefault = (message: string) => {
  toast(message, {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'dark',
  });
};
