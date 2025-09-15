/**
 * 방명록 좋아요 기능 구현 완료 ✅
 *
 * 완료된 작업:
 * - [x] 좋아요 버튼 클릭 시 서버 액션 호출
 * - [x] 클릭 후 UI 즉시 반영 (낙관적 업데이트)
 * - [x] useTransition을 사용한 서버 액션 상태 관리
 * - [x] 실패 시 롤백 처리
 * - [x] 버튼 비활성화로 중복 클릭 방지
 * - [x] Playwright MCP로 기능 테스트 완료
 */
'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { likeGuestbookEntry } from '@/app/actions';

interface LikeButtonProps {
  entryId: string;
  initialLikes: number;
}

export function LikeButton({ entryId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isPending, startTransition] = useTransition();

  const handleLike = () => {
    setLikes(prev => prev + 1);

    startTransition(async () => {
      const success = await likeGuestbookEntry(entryId);
      if (!success) {
        setLikes(prev => prev - 1);
      }
    });
  };

  return (
    <Button
      onClick={handleLike}
      disabled={isPending}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 text-muted-foreground hover:text-primary"
    >
      <Heart className="h-4 w-4" />
      <span>{likes}</span>
    </Button>
  );
}