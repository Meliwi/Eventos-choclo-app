import { useState } from "react";

export const useForm = () => {
  const [optionValue, setOptionValue] = useState("");

  const handleChange = (event) => {
    setOptionValue(event.target.value);
    // console.log(event.target.value);
  };

  return {
    optionValue,
    handleChange,
  };
};
