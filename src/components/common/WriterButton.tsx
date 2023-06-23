import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function WriterButton({ onClickHandler }: { onClickHandler: () => void }) {
  return (
    <button
      className={
        'flex h-[40px] items-center gap-1 rounded bg-blue-400 px-4 text-white'
      }
      onClick={onClickHandler}
    >
      <span className={`whitespace-nowrap`}>글쓰기</span>
      <FontAwesomeIcon icon={faAngleDown} />
    </button>
  );
}

export default WriterButton;
