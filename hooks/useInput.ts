import React, { useState } from "react";

export const useInput = (
  initValue: string,
  validator?: (value: string) => boolean
) => {
  const [value, setValue] = useState(initValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    if (validator === undefined) setValue(value);
    else {
      const willUpdate = validator(value);
      if (willUpdate) setValue(value);
    }
  };
  return { value, onChange };
};
