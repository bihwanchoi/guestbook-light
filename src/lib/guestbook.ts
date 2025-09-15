import { GuestbookEntry, GuestbookFormData } from '@/types/guestbook';

const guestbookEntries: GuestbookEntry[] = [];

export function createEntry(formData: GuestbookFormData): GuestbookEntry {
  const newEntry: GuestbookEntry = {
    id: crypto.randomUUID(),
    name: formData.name,
    message: formData.message,
    createdAt: new Date(),
  };

  guestbookEntries.push(newEntry);
  return newEntry;
}

export function getAllEntries(): GuestbookEntry[] {
  return [...guestbookEntries].sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}