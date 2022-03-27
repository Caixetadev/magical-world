import "../styles/globals.css";
import type { AppProps } from "next/app";

// Page Change imports
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

// Layout Import
import { AppLayout } from "components";

// SEO Imports
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

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
