import React, { useState } from "react";
import "../../styles/components/PeopleInput.scss";

const PeopleInput = ({ initial = 2, onChange }) => {
  const [count, setCount] = useState(initial);

  const updateCount = (newCount) => {
    if (newCount < 1) return;
    setCount(newCount);
    onChange?.(newCount);
  };

  return (
    <div className="people-input">
      <label>🙋 인원 수</label>
      <div className="control">
        <button onClick={() => updateCount(count - 1)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => updateCount(Number(e.target.value))}
          min={1}
        />
        <button onClick={() => updateCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default PeopleInput;
