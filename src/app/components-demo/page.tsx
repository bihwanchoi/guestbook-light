import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { GuestbookForm } from '@/components/guestbook-form';
import { GuestbookList } from '@/components/guestbook-list';

export default function ComponentsDemo() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">컴포넌트 데모</h1>
        <p className="text-muted-foreground">방명록 프로젝트에서 사용되는 컴포넌트들을 확인해보세요</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* shadcn/ui 기본 컴포넌트 */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">기본 UI 컴포넌트</h2>

          {/* Card 컴포넌트 */}
          <div>
            <h3 className="text-lg font-medium mb-3">Card</h3>
            <Card>
              <CardHeader>
                <CardTitle>카드 제목</CardTitle>
              </CardHeader>
              <CardContent>
                <p>이것은 카드 컴포넌트의 예시입니다. 방명록 항목을 표시할 때 사용됩니다.</p>
              </CardContent>
            </Card>
          </div>

          {/* Button 컴포넌트 */}
          <div>
            <h3 className="text-lg font-medium mb-3">Button</h3>
            <div className="flex flex-wrap gap-2">
              <Button>기본 버튼</Button>
              <Button variant="secondary">보조 버튼</Button>
              <Button variant="outline">아웃라인 버튼</Button>
              <Button variant="destructive">삭제 버튼</Button>
              <Button variant="ghost">고스트 버튼</Button>
              <Button variant="link">링크 버튼</Button>
            </div>
          </div>

          {/* Input 컴포넌트 */}
          <div>
            <h3 className="text-lg font-medium mb-3">Input</h3>
            <div className="space-y-2">
              <div>
                <Label htmlFor="demo-input">입력 필드</Label>
                <Input id="demo-input" placeholder="텍스트를 입력하세요" />
              </div>
              <div>
                <Label htmlFor="demo-input-error">에러 상태</Label>
                <Input
                  id="demo-input-error"
                  placeholder="에러 상태의 입력 필드"
                  className="border-red-500"
                />
                <p className="text-red-500 text-sm mt-1">이것은 에러 메시지입니다.</p>
              </div>
            </div>
          </div>

          {/* Textarea 컴포넌트 */}
          <div>
            <h3 className="text-lg font-medium mb-3">Textarea</h3>
            <div>
              <Label htmlFor="demo-textarea">텍스트 영역</Label>
              <Textarea
                id="demo-textarea"
                placeholder="여러 줄의 텍스트를 입력하세요"
                rows={4}
              />
            </div>
          </div>
        </div>

        {/* 방명록 컴포넌트 */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">방명록 컴포넌트</h2>

          {/* 방명록 폼 */}
          <div>
            <h3 className="text-lg font-medium mb-3">방명록 폼</h3>
            <GuestbookForm />
          </div>

          {/* 방명록 목록 */}
          <div>
            <h3 className="text-lg font-medium mb-3">방명록 목록</h3>
            <GuestbookList />
          </div>
        </div>

        {/* 레이아웃 예시 */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">레이아웃 예시</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h4 className="font-semibold">간단한 카드</h4>
                  <p className="text-sm text-muted-foreground mt-2">이것은 간단한 카드 레이아웃입니다.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h4 className="font-semibold">또 다른 카드</h4>
                  <p className="text-sm text-muted-foreground mt-2">반응형 그리드 레이아웃을 보여줍니다.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h4 className="font-semibold">세 번째 카드</h4>
                  <p className="text-sm text-muted-foreground mt-2">모바일에서는 세로로 정렬됩니다.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}