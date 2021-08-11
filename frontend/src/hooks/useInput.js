import React, { useState } from "react";
import { useValidation } from "./useValidation";

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isCameOut, setIsCameOut] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setIsCameOut(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isCameOut,
    ...valid,
  };
};
