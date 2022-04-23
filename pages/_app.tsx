import "../styles/globals.css";
import type { AppProps } from "next/app";

// Page Change imports
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

// Layout Import
import AppLayout from "../components/layout/AppLayout";

// SEO Imports
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // this is a bad solution
  const AnyComponent = Component as any;
  return (
    <>
      <DefaultSeo {...SEO} />
      <AppLayout>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {/* <AnyComponent {...pageProps} key={router.route} /> */}
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AppLayout>
    </>
  );
}

export default MyApp;
