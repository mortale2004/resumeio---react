import InputBox from "./InputBox";
import TextArea from "./TextArea";
import { useState } from "react";
import "../css/DynamicSec.css";
import { Trash2 } from "lucide-react";

const DynamicSec = ({
  addDynamicSec,
  removeDynamicSec,
  dSecName,
  attributes,
  placeholder,
}) => {
  const [dynamicSec, setDynamicSec] = useState(attributes);

  const handleInput = (e) => {
    setDynamicSec({ ...dynamicSec, [e.target.name]: e.target.value });
    addDynamicSec(dynamicSec, dSecName);
  };

  return (
    <div className="dynamicSecCon">
      
      <Trash2
        id={attributes.id}
        onClick={(e) => {
          removeDynamicSec(Number.parseInt(e.currentTarget.id), dSecName);
        }}
      />

      {dynamicSec[Object.keys(dynamicSec)[1]].length > 0 ||
      dynamicSec[Object.keys(dynamicSec)[2]].length > 0 ? (
        Object.keys(dynamicSec).length === 3 ? (
          <p>
            <b className="black">{dynamicSec[Object.keys(dynamicSec)[1]]}</b>{" "}
            <br /> {dynamicSec[Object.keys(dynamicSec)[2]]}{" "}
          </p>
        ) : (
          <p className="black">
            {dynamicSec[Object.keys(dynamicSec)[1]]} at{" "}
            {dynamicSec[Object.keys(dynamicSec)[2]]}
          </p>
        )
      ) : (
        <p className="black">
          <b>(Not Specified)</b>
        </p>
      )}

      <div className="dynamicSecItem">
        {Object.entries(dynamicSec).map((d, i) => {
          if (i === 0) {
            return "";
          } else if (d[0] === "description") {
            return (
              <TextArea
                key={i}
                className="dTextarea"
                name="description"
                label="description"
                placeholder={placeholder}
                handleInput={handleInput}
              />
            );
          } else {
            return (
              <InputBox
                key={i}
                name={d[0]}
                label={d[0].split(/(?=[A-Z])/).join(" ")}
                handleInput={handleInput}
                placeholder={d[1]}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default DynamicSec;
