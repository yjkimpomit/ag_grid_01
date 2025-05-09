import { useEffect } from 'react';

function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

// 사용 예시
/* function HomePage() {
  useTitle('홈페이지');
  return <div>홈페이지 내용</div>;
}
 */