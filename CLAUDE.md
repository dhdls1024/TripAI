# TripAI — AI 통합 여행 플래너

## 프로젝트 개요

MZ세대 대상 국내 여행 전 사이클(계획→준비→여행 중→여행 후)을 AI가 지원하는 통합 여행 플래너 웹 플랫폼.
팀: 권오인 & 이지형 / 수행 기간: 2026-04-10 ~ 2026-06-16 (약 9주)

## 기술 스택

| 영역 | 기술 |
|------|------|
| Frontend | React 19, Vite 8, Tailwind CSS 4, shadcn/ui |
| Backend | Spring Boot, OAuth2.0, REST API, WebSocket |
| AI | AI API (GPT-4 / Claude / Gemini) |
| DB | MySQL 또는 PostgreSQL |
| Infra | AWS EC2, S3, Nginx |
| 외부 API | 카카오 OAuth2.0, 기상청 단기예보 API, 카카오맵 API |

## 개발 서버 실행

```bash
cd frontend
npm install
npm run dev       # http://localhost:5173
npm run build     # 프로덕션 빌드
npm run preview   # 빌드 결과 미리보기
```

## 프론트엔드 구조

```
frontend/
├── src/
│   ├── components/     # 프로젝트 공통 컴포넌트
│   │   └── ui/         # shadcn 자동 생성 컴포넌트 (직접 수정 최소화)
│   ├── hooks/          # 커스텀 훅 (use 접두사)
│   ├── lib/            # 유틸 함수, 상수
│   │   ├── constants.js
│   │   └── utils.js    # cn() 등 공통 유틸
│   └── pages/          # 페이지 컴포넌트
```

## 코드 스타일

- 들여쓰기 스페이스 2칸, 세미콜론 금지
- 컴포넌트 파일명 `PascalCase.jsx`, 커스텀 훅 `useName.js`
- 매직넘버 금지 → `lib/constants.js`에 상수 정의
- 클래스 병합은 `cn()` 사용 (`clsx` + `tailwind-merge`)
- 인라인 스타일 금지 — Tailwind 클래스로 대체
- 함수 30줄 초과 시 분리

## Git 규칙

- 커밋 메시지 한글 작성, commitizen 사용
- 브랜치: `feature/기능명` (develop에서 파생)
- 흐름: `feature/*` → `develop` (PR + 리뷰) → `main` (PR + 리뷰) → 배포
- `main` 직접 push 금지, 셀프 머지 금지

## MVP 핵심 기능 (우선순위)

1. 카카오톡 OAuth2.0 로그인
2. AI 여행 일정 자동 생성 (사용자 입력 → AI API → 맞춤형 일정)
3. AI 공동 플래닝 보드 (WebSocket 실시간 공동 편집, 친구 초대, 투표)

## 보안 주의사항

- 카카오 OAuth2.0 기반 인증 (별도 비밀번호 저장 없음)
- 사용자 데이터 AES-256 암호화, HTTPS 필수
- 개인정보 최소 수집 원칙, 탈퇴 시 즉시 삭제

## 참고 문서

- `docs/PRD.md` — 전체 기능 요구사항 및 개발 일정
- `docs/rules.md` — 협업 규칙 (브랜치, 커밋, PR, 코드 스타일, 협업 사이클)
- `docs/tech-stack.md` — 기술 스택 및 의존성 상세
