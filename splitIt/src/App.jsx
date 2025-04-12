import React, { useState } from "react";
import UploadBox from "./components/upload/UploadBox";
import PreviewImage from "./components/upload/PreviewImage";
import OCRResultViewer from "./components/upload/OCRResultViewer";
import { recognizeTextFromImage } from "./utils/ocrUtils";

const App = () => {
  const [image, setImage] = useState(null);
  const [ocrText, setOcrText] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmedAmount, setConfirmedAmount] = useState(null);

  const handleRunOCR = async () => {
    if (!image) return;
    setLoading(true);
    const text = await recognizeTextFromImage(image, (progress) => {
      console.log("OCR 진행률:", progress);
    });
    setOcrText(text);
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>📸 SplitIt - 정산 시작하기</h2>

      {!image ? (
        <UploadBox onImageSelect={setImage} />
      ) : (
        <>
          <PreviewImage imageFile={image} onRemove={() => setImage(null)} />
          <button onClick={handleRunOCR}>🧠 OCR 실행</button>
        </>
      )}

      {loading && <p>🔄 OCR 인식 중입니다...</p>}

      {ocrText && (
        <OCRResultViewer
          rawText={ocrText}
          onAmountConfirm={(amount) => {
            console.log("확정된 금액:", amount);
            setConfirmedAmount(amount);
          }}
        />
      )}

      {confirmedAmount && (
        <p style={{ marginTop: "1rem" }}>
          ✅ <strong>{confirmedAmount.toLocaleString()}원</strong> 정산할 준비가
          완료됐습니다.
        </p>
      )}
    </div>
  );
};

export default App;
