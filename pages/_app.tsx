import "../styles/globals.css";
import type { AppProps } from "next/app";

// SEO Imports
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import AppLayout from "../components/layouts/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
