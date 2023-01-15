import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div style={{maxWidth:"1500px", width:"100%"}}>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
