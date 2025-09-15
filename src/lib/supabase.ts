import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)

// Auto-generated types from database schema
export type GuestbookEntry = Database['public']['Tables']['guestbook']['Row']
export type GuestbookInsert = Database['public']['Tables']['guestbook']['Insert']
export type GuestbookUpdate = Database['public']['Tables']['guestbook']['Update']