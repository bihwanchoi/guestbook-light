import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getGuestbookEntries } from '@/lib/guestbook';
import { LikeButton } from './like-button';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Seoul',
  }).format(date);
}

export async function GuestbookList() {
  const entries = await getGuestbookEntries();

  if (entries.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center text-muted-foreground">
            <p>아직 작성된 방명록이 없습니다.</p>
            <p className="text-sm mt-2">첫 번째 방명록을 작성해보세요!</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <Card key={entry.id}>
          <CardHeader>
            <CardTitle className="text-base flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span>{entry.name}</span>
                <LikeButton entryId={entry.id} initialLikes={entry.likes} />
              </div>
              <span className="text-sm font-normal text-muted-foreground">
                {formatDate(entry.created_at || '')}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap break-words">{entry.message}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}