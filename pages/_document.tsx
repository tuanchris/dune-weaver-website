import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Build mesmerizing kinetic sand tables with Dune Weaver - an open-source kinetic sand table project" />
        <link rel="icon" href={`${basePath}/images/logo.svg`} type="image/svg+xml"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
