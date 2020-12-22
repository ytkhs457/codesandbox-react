import React from "react";

export const InputTodo = (props) => {
  const style = {
    backgroundColor: "black",
    width: "400px",
    height: "30p",
    padding: "8px",
    margin: "8px",
    borderRadius: "4px"
  };

  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style} className="input-area">
      <input
        disabled={disabled}
        placeholder="Enter your TODO"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
