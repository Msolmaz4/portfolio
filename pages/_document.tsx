import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-primary">  {/* burda yaptgini tailwindconfig ayarla  extend icinde*/}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
