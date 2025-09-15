import { GuestbookEntry, GuestbookFormData } from '@/types/guestbook';

const guestbookEntries: GuestbookEntry[] = [];

export function createEntry(formData: GuestbookFormData): GuestbookEntry {
  const newEntry: GuestbookEntry = {
    id: crypto.randomUUID(),
    name: formData.name,
    message: formData.message,
    createdAt: new Date(),
    likes: 0,
  };

  guestbookEntries.push(newEntry);
  return newEntry;
}

export function getAllEntries(): GuestbookEntry[] {
  return [...guestbookEntries].sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function incrementLikes(entryId: string): boolean {
  const entry = guestbookEntries.find(e => e.id === entryId);
  if (entry) {
    entry.likes += 1;
    return true;
  }
  return false;
}