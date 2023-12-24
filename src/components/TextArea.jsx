const TextArea = ({
  className = "",
  handleInput,
  label = null,
  name,
  placeholder = "e.g. Passionate science teacher with 8+ year of experience and a track of ...",
  extra=true,
}) => {
  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          handleInput(e);
          e.currentTarget.nextElementSibling.children[1].innerHTML = `${e.currentTarget.value.length}/200`;
        }}
      ></textarea>

        
      <div className="flexCon">
        <p>{extra&&"Recruiter tip: write 50-200 characters to increase interview chances"}</p>
        <span className="wordCountCon">0/200</span>
      </div>
    </div>
  );
};

export default TextArea;
