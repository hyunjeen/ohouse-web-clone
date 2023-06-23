interface ErrorMessageBlockProps {
  message: string | undefined;
  $mb?: boolean;
}

function ErrorMessageBlock({ message, $mb }: ErrorMessageBlockProps) {
  return (
    <>
      {message && (
        <div className={`flex w-full justify-start ${$mb ? 'mb-3' : ''}`}>
          <span className="pl-1 text-sm font-medium text-red-600">
            {message}
          </span>
        </div>
      )}
    </>
  );
}

export default ErrorMessageBlock;
