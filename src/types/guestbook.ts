export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
  likes: number;
}

export interface GuestbookFormData {
  name: string;
  message: string;
}