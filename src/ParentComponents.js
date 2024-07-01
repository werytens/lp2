import React, { useRef } from 'react';
import CustomInput from './CustomInput';

const ParentComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Введите текст здесь" />
      <button onClick={focusInput}>Фокус на Input</button>
    </div>
  );
};

export default ParentComponent;
