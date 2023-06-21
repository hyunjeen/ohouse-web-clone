import RegisterFormView from '@/components/modules/auth/register/RegisterFormView';
import { useRegisterHook } from '@/hooks/useRegisterHook';
import { toastifyError } from '@/util/toastifyError';

function RegisterForm() {
  const { onSubmitHandler, errorReset, errorMessage, errorStatus } =
    useRegisterHook();

  if (errorStatus) {
    toastifyError(errorMessage, errorReset);
  }
  return <RegisterFormView onSubmitHandler={onSubmitHandler} />;
}

export default RegisterForm;
