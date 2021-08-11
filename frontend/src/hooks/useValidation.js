import React, { useState, useEffect } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);

  useEffect(() => {
    for (const v in validations) {
      switch (v) {
        case "minLength":
          value.length < validations[v] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        default:
          break;
      }
    }
  }, [value]);

  return {
    isEmpty,
    minLengthError,
  };
};
