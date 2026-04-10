# 협업 규칙

## 1. 브랜치 전략

### 브랜치 구성

| 브랜치 | 용도 |
|--------|------|
| `main` | 최종 배포 전용. 직접 push 금지 |
| `develop` | 팀 통합 테스트 브랜치. feature 브랜치 머지 대상 |
| `feature/*` | 기능별 개인 작업 브랜치 |

### 브랜치 네이밍

```
feature/기능명
```

예시:
- `feature/auth`
- `feature/ai-trip-planner`
- `feature/ui-ux`
- `feature/collaborative-board`

### 작업 흐름

```
feature/* → develop (PR + 리뷰) → 테스트 → main (PR + 리뷰) → 배포
```

1. `main`에서 `feature/기능명` 브랜치 생성
2. 기능 개발 완료 후 `develop`으로 PR 생성
3. 팀원 리뷰 및 승인 후 머지
4. `develop`에서 통합 테스트 진행
5. 모든 테스트 통과 후 `main`으로 PR 생성 및 배포

---

## 2. 커밋 컨벤션

### 형식

```
타입: 설명
```

### 커밋 타입

| 타입 | 설명 |
|------|------|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서 수정 |
| `style` | 코드 포맷, 세미콜론 등 (로직 변경 없음) |
| `refactor` | 코드 리팩토링 |
| `test` | 테스트 코드 추가/수정 |
| `chore` | 빌드, 패키지 설정 등 기타 변경 |

### 예시

```
feat: 카카오 로그인 구현
fix: 일정 생성 API 응답 오류 수정
docs: 브랜치 전략 문서 추가
```

### 규칙
- 커밋 메시지는 **한글**로 작성
- 커밋은 **작은 단위**로 나눠서 작성 (하나의 커밋 = 하나의 변경사항)
- staged 변경사항만 커밋 (불필요한 파일 포함 금지)
- `git diff`로 변경사항 확인 후 커밋 메시지 작성

---

## 3. PR 규칙

### PR 생성 기준

| PR 방향 | 생성 시점 |
|---------|----------|
| `feature/*` → `develop` | 기능 개발 완료 시 |
| `develop` → `main` | 모든 테스트 통과 후 |

### PR 제목 형식

```
[타입] 설명
```

예시:
- `[feat] 카카오 로그인 구현`
- `[fix] AI 일정 생성 오류 수정`

### PR 본문 형식

```
## Summary
- 변경사항 요약 (불릿 포인트)

## Test plan
- [ ] 테스트 항목 1
- [ ] 테스트 항목 2
```

### PR 규칙
- 리뷰어 지정 필수 (반드시 상대방 지정)
- **셀프 머지 금지** — 리뷰어 승인 후 머지
- `main`에 직접 push 금지, 반드시 PR을 통해 머지
- PR 생성 전 브랜치를 원격에 push 후 생성
- 리뷰 요청 후 상대방에게 알림

---

## 4. 코드 스타일

- 들여쓰기: 스페이스 2칸, **세미콜론 금지**
- 매직넘버 금지 → `lib/constants.js`에 상수 정의
- 함수 30줄 초과 시 분리
- 주석: 함수/메서드 역할 주석 필수, 복잡한 설계 결정은 이유 주석 추가

### React

- 컴포넌트 파일명 `PascalCase.jsx` (예: `TripCard.jsx`)
- 커스텀 훅은 `use` 접두사 + camelCase (예: `useTripPlan.js`)
- `useEffect` 의존성 배열 빠짐 없이 작성
- Props drilling 3단계 초과 시 Context 사용 검토

### Tailwind / shadcn

- 클래스 병합은 `clsx` + `tailwind-merge` (`cn()` 유틸 사용)
- shadcn 컴포넌트 커스터마이징 시 `components/ui/` 내에서만 수정
- 인라인 스타일(`style={{}}`) 사용 금지 — Tailwind 클래스로 대체

### 파일/폴더 구조

| 경로 | 용도 |
|------|------|
| `components/ui/` | shadcn 자동 생성 컴포넌트 (직접 수정 최소화) |
| `components/` | 프로젝트 공통 컴포넌트 |
| `lib/` | 유틸 함수, 상수 (`constants.js`, `utils.js`) |
| `hooks/` | 커스텀 훅 |

### Import 순서

```
1. 외부 라이브러리 (react, lucide-react 등)
2. 내부 공통 컴포넌트/유틸
3. 상대경로
```

---

## 5. 문서 업데이트 규칙

### 도구 역할 분리

| 도구 | 용도 |
|------|------|
| **ROADMAP.md** | 스프린트/마일스톤 단위 큰 그림 요약 |
| **GitHub Projects** | 이슈 단위 세부 진행 상황 실시간 추적 |

### ROADMAP.md 작성 규칙

- 스프린트 단위(약 1~2주)로 목표 정리
- 각 항목에 연관 GitHub 이슈 번호 링크
- 스프린트 종료 시 완료 여부 체크 후 다음 스프린트 추가
- 세부 작업은 적지 않음 — 한눈에 전체 흐름 파악용으로만 사용

```md
## Sprint 1 (04/10 ~ 04/20)
- [x] 프로젝트 초기 세팅
- [ ] 로그인/회원가입 (#12, #13)
- [ ] AI 일정 생성 기본 연동 (#14)

## Sprint 2 (04/21 ~ 04/30)
- [ ] 지도 연동 (#15)
- [ ] 일정 공유 기능 (#16)
```

### GitHub Projects 칸반 보드 상태

| 상태 | 시점 |
|------|------|
| `Todo` | 이슈 생성 후 등록 시 |
| `In Progress` | 작업 시작 시 (선택) |
| `Review in Progress` | PR 생성 후 |
| `Done` | 머지 완료 후 수동 이동 |

### 협업 사이클

```
[스프린트 시작]
  └─ ROADMAP.md에 스프린트 목표 + 이슈 번호 작성

[이슈 생성]
  └─ GitHub Issue 생성
  └─ Projects 칸반 보드에 등록 (Todo)
  └─ 작업 시작 시 In Progress로 변경 (선택)

[브랜치 생성 및 작업]
  └─ develop 브랜치에서 feature/기능명 브랜치 생성
  └─ git remote update 로 로컬 브랜치 상태 동기화
  └─ 로컬에서 작업 진행
  └─ 완료 후 commitizen 으로 커밋 & push

[PR 생성]
  └─ feature/* → develop 으로 PR 작성
  └─ reviewer, assignees, Projects, Linked Issues 설정
  └─ PR 본문에 "- Closed #이슈번호" 작성
  └─ Projects 상태를 Review in Progress로 변경

[리뷰 & 머지]
  └─ reviewer 승인 후 merge
  └─ 연결된 이슈 자동 Closed
  └─ Projects에서 이슈/PR 카드를 Done으로 이동
  └─ ROADMAP.md 해당 항목 체크

[스프린트 종료]
  └─ ROADMAP.md 완료 항목 최종 체크
  └─ 다음 스프린트 목표 작성
```

---

