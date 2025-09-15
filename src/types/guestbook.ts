export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
}

export interface GuestbookFormData {
  name: string;
  message: string;
}