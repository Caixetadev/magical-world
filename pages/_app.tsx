import '../styles/globals.css'
import type { AppProps } from 'next/app'

// SEO Imports
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <DefaultSeo {...SEO} />


    <main className='max-w-5xl  mx-auto min-h-screen'>
    <Component {...pageProps} />
    </main>
    
    </>
  )
}

export default MyApp
