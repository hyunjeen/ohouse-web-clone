function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      className={`w-full h-[50px] border rounded px-4 py-3 outline-0`}
      placeholder={placeholder}
    />
  );
}

export default Input;
