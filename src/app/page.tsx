import { GuestbookForm } from '@/components/guestbook-form';
import { GuestbookList } from '@/components/guestbook-list';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">방명록</h1>
        <p className="text-muted-foreground">여러분의 소중한 메시지를 남겨주세요</p>
      </header>

      <div className="space-y-8">
        <GuestbookList />
        <GuestbookForm />
      </div>
    </div>
  );
}
