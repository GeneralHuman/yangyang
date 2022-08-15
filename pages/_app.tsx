import "nextra-theme-blog/style.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <Script
          async={true}
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8906150045811493"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
