import { memo, useState } from "react";

const InputBox = memo(({ name, label, placeholder="", handleInput }) => {
  const [input, setInput] = useState("");

  return (
    <div className="inputCon">
      <label>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          handleInput(e);
        }}
      />
    </div>
  );
});

export default InputBox;
