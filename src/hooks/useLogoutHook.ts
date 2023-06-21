import auth from '@/api/auth';
import { useRouter } from 'next/router';
import { persistor } from '@/redux/store/storeConfig';
import { useCallback } from 'react';

export const useLogoutHook = () => {
  const router = useRouter();
  const onLogoutHandler = useCallback(async () => {
    try {
      await auth.logout();
      await persistor.purge();
      void router.replace('/?logout_popup=true');
    } catch (error) {
      // 추후 고민하여 로직짜기
      return;
    }
  }, [router]);
  return { onLogoutHandler };
};
