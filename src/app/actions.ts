'use server';

import { revalidatePath } from 'next/cache';
import { createEntry, incrementLikes } from '@/lib/guestbook';
import { GuestbookFormData } from '@/types/guestbook';

export async function addGuestbookEntry(formData: FormData) {
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  if (!name || name.trim().length === 0 || name.trim().length > 20) {
    throw new Error('이름은 1-20자여야 합니다.');
  }

  if (!message || message.trim().length === 0 || message.trim().length > 500) {
    throw new Error('메시지는 1-500자여야 합니다.');
  }

  const guestbookData: GuestbookFormData = {
    name: name.trim(),
    message: message.trim(),
  };

  createEntry(guestbookData);
  revalidatePath('/');
}

export async function likeGuestbookEntry(entryId: string) {
  const success = incrementLikes(entryId);
  if (success) {
    revalidatePath('/');
  }
  return success;
}