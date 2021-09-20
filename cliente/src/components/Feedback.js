import React from "react";

export const Feedback = ({ message, onClick, confirm, state = false }) => {
  if (!state) {
    return null;
  }
  return (
    <div className="submit__feedback" type={confirm}>
      <div className="submit__modal-container">
        <button className="submit__close-button" onClick={onClick}>
          <span className="sumbit__span" aria-hidden="true">&times;</span>
        </button>
        <p className="submit__message">{message}</p>
      </div>
    </div>
  );
};
