import React from 'react';

function Label({ title, htmlFor }: { htmlFor: string; title: string }) {
  return (
    <label className={`mt-4 w-full`} htmlFor={htmlFor}>
      <p className={`mb-1 font-bold`}>{title}</p>
    </label>
  );
}

export default Label;
