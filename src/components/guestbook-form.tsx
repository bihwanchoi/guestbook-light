'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { createGuestbookEntry } from '@/lib/guestbook';

export function GuestbookForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    } else if (name.trim().length > 20) {
      newErrors.name = '이름은 20자 이하로 입력해주세요.';
    }

    if (!message.trim()) {
      newErrors.message = '메시지를 입력해주세요.';
    } else if (message.trim().length > 500) {
      newErrors.message = '메시지는 500자 이하로 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', name.trim());
      formData.append('message', message.trim());

      await createGuestbookEntry(formData);

      setName('');
      setMessage('');
      setErrors({});
    } catch (error) {
      console.error('방명록 등록 중 오류가 발생했습니다:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>방명록 작성</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="mb-2 block">이름</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력해주세요 (1-20자)"
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="mb-2 block">메시지</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="메시지를 입력해주세요 (1-500자)"
              rows={4}
              className={errors.message ? 'border-red-500' : ''}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? '등록 중...' : '등록'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}