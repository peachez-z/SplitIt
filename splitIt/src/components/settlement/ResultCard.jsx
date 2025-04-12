import React from "react";
import "../../styles/components/ResultCard.scss";

const ResultCard = ({ peopleCount, totalAmount }) => {
  if (!peopleCount || !totalAmount) return null;

  const perPerson = Math.ceil(totalAmount / peopleCount);

  return (
    <div className="result-list">
      <h3>💸 정산 결과</h3>
      <ul>
        {Array.from({ length: peopleCount }, (_, i) => (
          <li className="card" key={i}>
            <div className="name">친구 {i + 1}</div>
            <div className="amount">{perPerson.toLocaleString()}원</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultCard;
