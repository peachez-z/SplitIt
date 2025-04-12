import React, { useState, useEffect } from "react";
import PeopleInput from "../settlement/PeopleInput";
import ResultCard from "../settlement/ResultCard";
import "../../styles/components/OCRResultViewer.scss";

// OCR 결과에서 모든 금액 합산
const extractTotalAmount = (text) => {
  const matches = text.match(/(?:\d[\d,]*)\s*원|\d{1,3}(?:[,\s]\d{3})+/g);
  if (!matches) return 0;

  const total = matches
    .map((m) => m.replace(/[^\d]/g, ""))
    .filter((n) => n.length >= 4)
    .map((n) => parseInt(n, 10))
    .reduce((acc, cur) => acc + cur, 0);

  return total;
};

const OCRResultViewer = ({ rawText }) => {
  const [amount, setAmount] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [peopleCount, setPeopleCount] = useState(2);

  useEffect(() => {
    if (rawText) {
      const total = extractTotalAmount(rawText);
      setAmount(total);
      setConfirmed(false); // 새 텍스트가 들어오면 다시 초기화
    }
  }, [rawText]);

  const handleConfirm = () => {
    if (!amount || !peopleCount) return;
    setConfirmed(true); // 결과 카드 표시
  };

  return (
    <div className="ocr-viewer">
      <h3>🔍 OCR 인식 결과</h3>

      <textarea value={rawText} readOnly className="ocr-raw-text" />

      <div className="amount-confirm">
        <label htmlFor="amount">인식된 총합 금액 (수정 가능):</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            setConfirmed(false); // 금액 변경 시 결과 리셋
          }}
        />
      </div>

      <PeopleInput
        initial={2}
        onChange={(count) => {
          setPeopleCount(count);
          setConfirmed(false); // 인원 변경 시 결과 리셋
        }}
      />

      <button onClick={handleConfirm}>💰 정산 결과 보기</button>

      {confirmed && (
        <ResultCard
          totalAmount={parseInt(amount, 10)}
          peopleCount={peopleCount}
        />
      )}
    </div>
  );
};

export default OCRResultViewer;
