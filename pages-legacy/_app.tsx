import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import MDXComponents from '../components/MDXComponents';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </MDXProvider>
  );
}
