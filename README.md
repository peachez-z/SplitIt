# 🧾 SplitIt

카드 영수증을 업로드하면 금액을 자동으로 인식하고, 친구들과 쉽게 정산할 수 있는 웹 서비스입니다.  
마스코트 '정산다람쥐 코코'가 즐겁고 귀엽게 정산을 도와줍니다!

---

## 📸 주요 기능

- 이미지 업로드로 영수증 OCR 처리
- 인식된 총 금액 → 인원 수로 자동 정산
- 결과를 카드 형식으로 보여줌
- 귀여운 캐릭터와 함께하는 사용자 피드백
- 정산 결과 공유 (링크 복사 / SNS 연동 예정)

---

## 🛠️ 기술 스택

| 영역                      | 기술                       | 설명                                     |
| ------------------------- | -------------------------- | ---------------------------------------- |
| **프론트엔드 프레임워크** | React + Vite               | 빠른 개발을 위한 모던 웹 프레임워크      |
| **스타일링**              | SCSS (Sass)                | 컴포넌트 기반 스타일, 커스터마이징 용이  |
| **이미지 업로드**         | File API                   | 사용자의 이미지 업로드 처리              |
| **OCR 처리**              | Tesseract.js               | 이미지에서 문자 추출 (가격 인식용)       |
| **정산 로직**             | JavaScript 내장 계산 로직  | 총 금액 ➗ 인원 수 정산                  |
| **상태 관리**             | useState, useEffect        | 간단한 UI 상태 관리                      |
| **라우팅**                | React Router               | 페이지 전환 및 URL 기반 뷰 분리          |
| **캐릭터 UI**             | 이미지 기반 컴포넌트       | 마스코트 코코 캐릭터, 도장 애니메이션 등 |
| **공유 기능 (선택)**      | Clipboard API / Kakao 공유 | 정산 결과 공유 기능                      |
| **배포 (선택)**           | Vercel / Netlify           | 정적 웹사이트 배포 플랫폼                |

---

## 📦 컴포넌트 구조

| 경로                     | 컴포넌트명            | 설명                            |
| ------------------------ | --------------------- | ------------------------------- |
| `components/common/`     | `Button.jsx`          | 재사용 가능한 버튼 컴포넌트     |
|                          | `Input.jsx`           | 기본 입력 필드                  |
|                          | `Modal.jsx`           | 팝업 모달 창                    |
|                          | `Header.jsx`          | 상단 네비게이션 바              |
|                          | `Footer.jsx`          | 하단 정보 영역                  |
| `components/upload/`     | `UploadBox.jsx`       | 이미지 업로드 드래그앤드롭 영역 |
|                          | `PreviewImage.jsx`    | 업로드된 이미지 미리보기        |
|                          | `OCRResultViewer.jsx` | OCR 결과 텍스트 표시            |
| `components/settlement/` | `PeopleInput.jsx`     | 정산 인원 수 입력 필드          |
|                          | `PriceDisplay.jsx`    | OCR로 인식된 금액 표시          |
|                          | `ResultCard.jsx`      | 인당 금액과 정산 정보 카드      |
|                          | `ShareLink.jsx`       | 공유 가능한 링크 생성기         |
| `components/mascot/`     | `CokoTalking.jsx`     | 캐릭터 코코의 말풍선 대사       |
|                          | `CokoStamp.jsx`       | 정산 완료 도장 캐릭터 이미지    |
|                          | `CokoPose.jsx`        | 상황별 포즈 (기쁨, 인사 등)     |
| `pages/`                 | `Home.jsx`            | 이미지 업로드 및 정산 시작      |
|                          | `Result.jsx`          | 정산 결과 확인 페이지           |
|                          | `NotFound.jsx`        | 404 Not Found 페이지            |
| `routes/`                | `Router.jsx`          | 라우팅 정의                     |
| `styles/`                | `main.scss`           | 전역 SCSS 스타일                |
|                          | `_variables.scss`     | 색상, 폰트 등 SCSS 변수         |
|                          | `_mixins.scss`        | 공통 스타일 믹스인              |

---

## 🚀 실행 방법

```bash
# 1. 프로젝트 클론
git clone https://github.com/peachez-z/SplitIt.git
cd splitit

# 2. 패키지 설치
npm install

# 3. 로컬 개발 서버 실행
npm run dev
```
