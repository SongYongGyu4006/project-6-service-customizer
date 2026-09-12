# Project 6: 서비스 사용자 맞춤형 변환 도구

## 프로젝트 개요
다른 사람들이 사용하는 서비스(예: Notion, Slack 등)를 사용자의 환경에 맞게 변환해주는 도구를 개발합니다. 기존에 존재하는 자주 쓰는 앱을 개인 용도로 어떻게 활용할 수 있을지 제안해주는 서비스입니다.

## 프로젝트 구조
```
project_6/
├── README.md                 # 이 문서
├── src/
│   ├── frontend/            # React.js 기반 프론트엔드
│   │   ├── public/
│   │   │   └── index.html   # React 진입점 HTML
│   │   ├── src/
│   │   │   ├── App.js       # 메인 컴포넌트
│   │   │   ├── App.css      # 스타일 정의
│   │   │   └── index.js     # React 루트 진입점
│   │   └── package.json     # 프론트엔드 의존성
│   ├── backend/             # Node.js + Express 백엔드
│   │   ├── server.js        # 메인 서버 파일
│   │   └── package.json     # 백엔드 의존성
│   └── ai/                  # AI 분석 모듈
│       └── analyzer.js      # 분석 로직
└── .gitignore               # Git 무시 파일
```

## 기능 요약
1. 사용자가 원하는 서비스 유형 선택 (예: Notion, Slack, Gmail 등)
2. 사용자 환경에 대한 설명 입력
3. 백엔드 서버로 분석 요청 전송
4. AI 기반 분석 결과 표시
5. 구현 가이드 제공

## 실행 방법
### 백엔드 서버 실행
```bash
cd src/backend
node server.js
```

### 프론트엔드 서버 실행
```bash
cd src/frontend
npm start
```

## 개발 내역
- 2026.09.12: 초기 설정 및 기능 개발 완료
- 문제 해결: 텍스트 가시성 문제 (color inheritance 문제 해결)
- 프론트엔드와 백엔드 연동 확인

## 사용된 기술 스택
- 프론트엔드: React.js, HTML5, CSS3
- 백엔드: Node.js, Express.js
- AI 분석: Mock 데이터 (후속 개발 예정)

## 구현 세부사항
- 프로젝트는 사용자가 선택한 서비스에 대해 맞춤형 분석 결과를 제공
- 현재는 mock 데이터로 동작 (실제 OpenAI API 연동은 후속 개발 예정)
- 분석 결과는 다음과 같은 항목 포함:
  - 서비스 분석 (h3 태그) 
  - 분석 내용 (p 태그)
  - 추천 사항 목록 (ul, li)
  - 구현 가이드 (p 태그)

## 문제 해결 내용
- 프론트엔드에서 텍스트가 보이지 않는 버그 수정
- `.App-header` color 상속 문제로 인한 글자 색상 문제 해결
- `.result-item` 내부 텍스트 요소에 명시적 색상 지정 적용

## 다음 개발 계획
1. OpenAI API 연동 (실제 AI 분석 기능)
2. 데이터베이스 연동 (사용자 설정 저장)
3. 더 많은 서비스 타입 추가
4. 사용자 맞춤형 설정 템플릿 제공
5. 전체 시스템 테스트 및 오류 수정
