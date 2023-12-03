import { useState } from "react";

export const useInput = <T>(initialState: T) => {
  const [inputValue, setInputValue] = useState(initialState);

  const changeInputHandler = (e: React.FormEvent<HTMLFormElement>) => {
    setInputValue({
      ...inputValue,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  return { inputValue, changeInputHandler };
};
