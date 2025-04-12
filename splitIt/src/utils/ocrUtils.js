import Tesseract from "tesseract.js";

export const recognizeTextFromImage = async (imageFile) => {
  const result = await Tesseract.recognize(imageFile, "eng+kor", {
    logger: (m) => console.log(m),
  });

  return result.data.text;
};
