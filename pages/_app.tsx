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
      </Head>
      <Script
        id="Adsense-id"
        async={true}
        strategy="afterInteractive"
        data-ad-client="ca-pub-8906150045811493"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
        onError={(e) => {
          console.error("Google Script failed to load", e);
        }}
      />
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        id="gtagManagerScript"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-0C9748ZBEZ"
      />
      <Script
        id="gtagScript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-0C9748ZBEZ');
            `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
