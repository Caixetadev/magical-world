import '../styles/globals.css'
import type { AppProps } from 'next/app'

// SEO Imports
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <DefaultSeo {...SEO} />
     <Component {...pageProps} />
    </>
  )
}

export default MyApp
