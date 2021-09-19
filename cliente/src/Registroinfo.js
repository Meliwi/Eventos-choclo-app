import React from "react";
import { Options } from "./Options.js";

export const Registroinfo = () => {
  const mockData = [
    {
      id: 0,
      name: "CodeSandbox",
      url: "https://codesandbox.io",
    },
    {
      id: 1,
      name: "StackOverflow",
      url: "https://stackoverflow.com",
    },
    {
      id: 2,
      name: "Github",
      url: "https://github.com/",
    },
  ];

  return (
    <div className="formdb__box-containter">
      <h3 className="auth__title">Envio INFO</h3>
      <form>
        <Options options_values={mockData}></Options>
      </form>
    </div>
  );
};
