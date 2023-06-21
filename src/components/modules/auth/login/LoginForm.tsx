import LoginFormView from '@/components/modules/auth/login/LoginFormView';

import { toastifyError } from '@/util/toastifyError';
import { useLoginHook } from '@/hooks/useLoginHook';

function LoginForm() {
  const { errorStatus, errorMessage, onSubmitHandler, errorReset } =
    useLoginHook();
  if (errorStatus) {
    toastifyError(errorMessage, errorReset);
  }

  return <LoginFormView onSubmitHandler={onSubmitHandler} />;
}

export default LoginForm;
