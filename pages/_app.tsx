import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

// SEO Imports
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import AppLayout from "../components/layouts/AppLayout";
import PageLayout from "@components/layouts/PageLayout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <DefaultSeo {...SEO} />
      <AppLayout>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {/* <PageLayout> */}
          <Component {...pageProps} key={router.route} />
          {/* </PageLayout> */}
        </AnimatePresence>
      </AppLayout>
    </>
  );
}

export default MyApp;
