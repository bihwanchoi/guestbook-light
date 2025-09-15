'use server'

import { supabase } from './supabase'
import type { GuestbookEntry, GuestbookInsert } from './supabase'
import { revalidatePath } from 'next/cache'

// 방명록 추가 서버 액션
export async function createGuestbookEntry(formData: FormData) {
  const name = formData.get('name') as string
  const message = formData.get('message') as string

  if (!name || !message) {
    throw new Error('이름과 메시지는 필수 항목입니다.')
  }

  const entryData: GuestbookInsert = {
    name: name.trim(),
    message: message.trim(),
  }

  const { data, error } = await supabase
    .from('guestbook')
    .insert(entryData)
    .select()
    .single()

  if (error) {
    throw new Error('방명록 등록에 실패했습니다: ' + error.message)
  }

  revalidatePath('/')
  return data
}

// 방명록 조회 서버 액션
export async function getGuestbookEntries(): Promise<GuestbookEntry[]> {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error('방명록 조회에 실패했습니다: ' + error.message)
  }

  return data || []
}

// 좋아요 기능 서버 액션
export async function incrementLikes(entryId: string) {
  // 현재 좋아요 수를 가져와서 1 증가시키기
  const { data: currentEntry, error: selectError } = await supabase
    .from('guestbook')
    .select('likes')
    .eq('id', entryId)
    .single()

  if (selectError) {
    throw new Error('방명록 항목을 찾을 수 없습니다.')
  }

  const newLikes = (currentEntry.likes || 0) + 1

  const { error: updateError } = await supabase
    .from('guestbook')
    .update({ likes: newLikes })
    .eq('id', entryId)

  if (updateError) {
    throw new Error('좋아요 업데이트에 실패했습니다: ' + updateError.message)
  }

  revalidatePath('/')
}