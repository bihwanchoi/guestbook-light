# 방명록 좋아요 기능 구현 Task List

## 현재 구조 분석
- 방명록 데이터: 메모리 내 배열로 관리 (`src/lib/guestbook.ts`)
- 데이터 타입: `GuestbookEntry` (id, name, message, createdAt)
- 컴포넌트: `GuestbookList` (서버), `GuestbookForm` (클라이언트)

## 구현 작업 목록

### 1. 데이터 구조 수정
- [ ] `GuestbookEntry` 타입에 `likes` 필드 추가 (기본값: 0)
- [ ] 기존 엔트리들의 좋아요 수 초기화

### 2. 좋아요 기능 로직 구현
- [ ] `src/lib/guestbook.ts`에 `incrementLikes(entryId: string)` 함수 추가
- [ ] `src/app/actions.ts`에 좋아요 서버 액션 추가

### 3. UI 컴포넌트 수정
- [ ] `GuestbookList` 컴포넌트에 좋아요 버튼 및 카운트 표시
- [ ] Heart 아이콘(Lucide) 사용
- [ ] 좋아요 수 표시 (0일 때도 표시)

### 4. 인터랙션 구현
- [ ] 좋아요 버튼 클릭 시 서버 액션 호출
- [ ] 클릭 후 UI 즉시 반영 (낙관적 업데이트)

## 구현 원칙
- Over engineering 금지: 단순한 메모리 기반 구현
- 중복 좋아요 방지 로직 없음 (현재 요구사항에 없음)
- 서버 컴포넌트 우선 사용
- 클라이언트 컴포넌트는 인터랙션이 필요한 부분만