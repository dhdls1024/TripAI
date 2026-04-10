# 기술 스택 및 의존성

> 팀원 개발 환경 세팅 시 참고하세요.

## 실행 환경

| 항목 | 버전 |
|------|------|
| Node.js | v24.13.1 |
| npm | v11.8.0 |

---

## 프론트엔드 (`frontend/`)

### 핵심 프레임워크

| 패키지 | 버전 | 설명 |
|--------|------|------|
| react | ^19.2.4 | UI 라이브러리 |
| react-dom | ^19.2.4 | React DOM 렌더러 |
| vite | ^8.0.4 | 번들러 / 개발 서버 |

### UI / 스타일링

| 패키지 | 버전 | 설명 |
|--------|------|------|
| tailwindcss | ^4.2.2 | 유틸리티 CSS 프레임워크 |
| @tailwindcss/vite | ^4.2.2 | Vite용 Tailwind 플러그인 |
| shadcn | ^4.2.0 | shadcn/ui 컴포넌트 CLI |
| tw-animate-css | ^1.4.0 | Tailwind 애니메이션 유틸리티 |
| lucide-react | ^1.8.0 | 아이콘 라이브러리 |
| @fontsource-variable/geist | ^5.2.8 | Geist 가변 폰트 |
| @base-ui/react | ^1.3.0 | 비스타일 UI 프리미티브 |

### 유틸리티

| 패키지 | 버전 | 설명 |
|--------|------|------|
| clsx | ^2.1.1 | 조건부 클래스명 병합 |
| class-variance-authority | ^0.7.1 | 컴포넌트 variant 관리 (cva) |
| tailwind-merge | ^3.5.0 | Tailwind 클래스 충돌 해결 |

### 개발 도구 (devDependencies)

| 패키지 | 버전 | 설명 |
|--------|------|------|
| @vitejs/plugin-react | ^6.0.1 | Vite React 플러그인 (Fast Refresh) |
| eslint | ^9.39.4 | 코드 린터 |
| eslint-plugin-react-hooks | ^7.0.1 | React Hooks 린트 규칙 |
| eslint-plugin-react-refresh | ^0.5.2 | React Refresh 린트 규칙 |
| @eslint/js | ^9.39.4 | ESLint JS 규칙 |
| globals | ^17.4.0 | 전역 변수 목록 |
| @types/react | ^19.2.14 | React 타입 정의 |
| @types/react-dom | ^19.2.3 | React DOM 타입 정의 |
| @types/node | ^25.5.2 | Node.js 타입 정의 |

---

## 시작하기

```bash
# 의존성 설치
cd frontend
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```
