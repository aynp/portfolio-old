import { Suspense } from 'react';

import Container from './Container';

export default function BlogLayout({ children }: any) {
  return (
    <Container>
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <Suspense fallback={null}>
          <div className="w-full prose dark:prose-dark max-w-none">
            {children}
          </div>
        </Suspense>
      </article>
    </Container>
  );
}
