# 방명록 컴포넌트 구현 Task List

## 1. shadcn/ui 컴포넌트 설치
- [x] `npx shadcn@latest add card form input textarea button` 실행
- [x] 설치된 컴포넌트들이 `src/components/ui/` 에 생성되는지 확인

## 2. 타입 정의 생성
- [x] `src/types/guestbook.ts` 파일 생성
- [x] `GuestbookEntry` 인터페이스 정의 (id, name, message, createdAt)
- [x] `GuestbookFormData` 인터페이스 정의 (name, message)

## 3. 데이터 처리 유틸리티
- [x] `src/lib/guestbook.ts` 파일 생성
- [x] 메모리 기반 임시 저장소 배열 생성
- [x] `createEntry()` 함수 구현 (ID 생성 + 데이터 추가)
- [x] `getAllEntries()` 함수 구현 (최신순 정렬)

## 4. 서버 액션 구현
- [x] `src/app/actions.ts` 파일 생성
- [x] `addGuestbookEntry()` 서버 액션 구현
- [x] 폼 데이터 유효성 검사 추가
- [x] `revalidatePath('/')` 로 페이지 새로고침

## 5. 방명록 폼 컴포넌트
- [x] `src/components/guestbook-form.tsx` 생성
- [x] 클라이언트 컴포넌트로 설정 (`"use client"`)
- [x] Form, Input, Textarea, Button 조합
- [x] 기본 유효성 검사 (이름 1-20자, 메시지 1-500자)
- [x] 제출 후 폼 리셋 처리

## 6. 방명록 목록 컴포넌트
- [x] `src/components/guestbook-list.tsx` 생성
- [x] 서버 컴포넌트로 유지
- [x] Card 컴포넌트로 각 항목 렌더링
- [x] 빈 목록 상태 처리
- [x] 날짜 포맷팅 (한국 시간)

## 7. 메인 페이지 수정
- [x] `src/app/page.tsx` 기존 내용 제거
- [x] 페이지 제목 "방명록" 추가
- [x] GuestbookForm 컴포넌트 추가
- [x] GuestbookList 컴포넌트 추가
- [x] 기본 레이아웃 스타일링 (container, spacing)

## 8. 최종 검증
- [x] TypeScript 에러 체크 (`npx tsc --noEmit`)
- [x] 개발 서버 실행하여 동작 확인
- [x] 방명록 작성/표시 기능 테스트
- [x] 반응형 디자인 확인

## 주의사항
- 서버 컴포넌트 우선 사용 (CLAUDE.md 가이드)
- 테마 시스템 컬러만 사용
- 과도한 기능 추가 금지
- 한국어 텍스트 사용
