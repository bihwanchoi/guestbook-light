# 데이터베이스 연동 계획

## Task List

### 1. Supabase 프로젝트 설정 및 테이블 설계
- [x] Supabase MCP를 통해 방명록 데이터 저장을 위한 `guestbook` 테이블 설계
- [x] 필요한 필드 정의: id, name, message, created_at, likes 등

### 2. 방명록 테이블 생성 마이그레이션 작성
- [x] 방명록 테이블 생성을 위한 SQL 마이그레이션 작성
- [x] RLS(Row Level Security) 정책 설정

### 3. 환경 변수 설정 (.env.local)
- [x] `.env.local` 파일에 Supabase URL과 anon key 설정
- [x] Next.js 환경 변수 구성

### 4. Supabase 클라이언트 설정
- [x] `@/lib/supabase.ts` 파일 생성하여 Supabase 클라이언트 초기화

### 5. TypeScript 타입 생성
- [x] Supabase MCP를 통해 데이터베이스 스키마 기반 TypeScript 타입 자동 생성

### 6. 서버 액션으로 CRUD 기능 구현
- [x] 방명록 추가 서버 액션 구현
- [x] 방명록 조회 서버 액션 구현
- [x] 좋아요 기능 서버 액션 구현
- [x] Next.js 15 App Router의 서버 액션 패턴 활용

### 7. 기존 컴포넌트 수정 (데이터베이스 연동)
- [x] `guestbook-form.tsx`: 실제 데이터베이스에 저장하도록 수정
- [x] `guestbook-list.tsx`: 데이터베이스에서 데이터를 가져와 표시하도록 수정

### 8. TypeScript 체크 및 테스트
- [x] TypeScript 체크 실행
- [x] Playwright MCP로 페이지 접근하여 기능 테스트
- [x] 오류 해결 및 최종 검증

## 예상 결과물
- 실제 데이터베이스와 연동된 방명록 애플리케이션
- 영구적인 데이터 저장 및 조회 기능
- 좋아요 기능의 실제 카운터 작동
- 서버 컴포넌트 기반의 성능 최적화된 구조