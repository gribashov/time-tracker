// libraries
import React, { useState, useEffect } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isMinLength, setIsMinLength] = useState(false);
  const [isMaxLength, setIsMaxLength] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidInput, setIsValidInput] = useState(false);

  useEffect(() => {
    for (const v in validations) {
      switch (v) {
        case "minLength":
          value.length < validations[v] ? setIsMinLength(true) : setIsMinLength(false);
          break;
        case "empty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case "validEmail":
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase()) ? setIsValidEmail(false) : setIsValidEmail(true);
          break;
        case "maxLength":
          value.length > validations[v] ? setIsMaxLength(true) : setIsMaxLength(false);
          break;
        default:
          break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || isMinLength || isValidEmail || isMaxLength) {
      setIsValidInput(false);
    } else {
      setIsValidInput(true);
    }
  }, [isEmpty, isMinLength, isValidEmail, isMaxLength]);

  return {
    isEmpty,
    isMinLength,
    isValidEmail,
    isMaxLength,
    isValidInput,
  };
};
