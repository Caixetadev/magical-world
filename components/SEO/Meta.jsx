import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Meta({ pageMeta }) {
  const router = useRouter();
  const meta = {
    title: "James Midzi",
    description: "Half Stack Developer | Writer | Tutor",
    // canonical: `http://localhost:3000${router.asPath}`,
    ...pageMeta,
  };
  const SEO = {
    title: meta.title,
    description: meta.description,

    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
  return <NextSeo {...SEO} />;
}
