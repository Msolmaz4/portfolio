import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}


// export default function App({ Component, pageProps }: AppProps) { ... }: Bu satır, App adlı bir fonksiyonu ve bu fonksiyona AppProps tipinden gelen iki parametreyi alarak bir default export yapar. Bu fonksiyon, Next.js uygulamasının ana bileşenini temsil eder. Component parametresi, herhangi bir sayfa bileşenini (örneğin, "pages" dizinindeki dosyalar) temsil eder ve pageProps parametresi, sayfa bileşenine geçirilecek olan özellikleri içerir.

// return <Component {...pageProps} />;: Bu satır, Component adlı bileşeni ve ona bağlı olan pageProps adlı özellikleri içeren JSX'i döndürür. Bu, aslında uygulamanın ana bileşenini oluşturan ve sayfalar arasında paylaşılan ortak bir şablona işaret eder.