import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";         // ✅ Required for <Head>
import Script from "next/script";     // ✅ Required for GA4 scripts

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Head>
        <title>Stanley Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* GA4 Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8D0G1C9W75"
        strategy="afterInteractive"
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8D0G1C9W75');
          `,
        }}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
