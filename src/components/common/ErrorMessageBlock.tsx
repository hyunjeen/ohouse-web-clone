interface ErrorMessageBlockProps {
  error: boolean;
  message: string | undefined;
  $mb?: boolean;
}

function ErrorMessageBlock({ error, message, $mb }: ErrorMessageBlockProps) {
  return (
    <>
      {error && (
        <div className={`flex justify-start w-full ${$mb ? "mb-3" : ""}`}>
          <span className="text-red-600 font-thin text-sm pl-1">{message}</span>
        </div>
      )}
    </>
  );
}

export default ErrorMessageBlock;
