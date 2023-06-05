interface ErrorMessageBlockProps {
  error: boolean;
  message: string | undefined;
  $mb?: boolean;
}

function ErrorMessageBlock({ error, message, $mb }: ErrorMessageBlockProps) {
  return (
    <>
      {error && (
        <div className={`flex w-full justify-start ${$mb ? 'mb-3' : ''}`}>
          <span className="pl-1 text-sm font-thin text-red-600">{message}</span>
        </div>
      )}
    </>
  );
}

export default ErrorMessageBlock;
