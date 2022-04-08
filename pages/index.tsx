import type { NextPage, GetStaticProps } from "next";
// import { PageLayout, PageTitle, Section } from "components";

import PageLayout from "@components/layout/PageLayout";
import PageTitle from "@components/shared/PageTitle";
import Section from "@components/shared/Section";

// import { PageTitle } from "@components/shared";
// import { PageLayout } from "@components/";

// import PageTitle from "@components/shared/PageTitle";
// import PageLayout from "@components/layout/PageLayout";

import { TimeLineData } from "../utils/constants";
import { ITimeline } from "../interfaces";

interface IProps {
  timeline: ITimeline[];
}

export const getStaticProps: GetStaticProps = async () => {
  const timeline = await TimeLineData;
  return { props: { timeline } };
};

const title = "Hi, I'm  James";
const subtitle =
  "I am a Draziw, Curator and Professor . I believe that knowledge should be shared, and I try to do my part in that regard each day. I am on a journey to become a reknown Potions Master.";

const Home: NextPage<IProps> = ({ timeline }) => {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <Meta
        pageMeta={{
          title: "Potions Room",
        }}
      /> */}

      <PageLayout pageMeta={{ title: "Potions Room" }}>
        <PageTitle title={title} subtitle={subtitle} />

        <Section linebreak>
          <h2 className="mb-5 font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl">
            Take a trip through my pensieve
          </h2>
          <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
            {timeline.map((event) => (
              <div className="flex flex-col justify-between rounded-md bg-gray-800 p-4 text-gray-300 shadow-xl">
                <h3 className="text-base">{event.text}</h3>
                <p>{event.year}</p>
              </div>
            ))}
          </div>
          {/* <p className="prose text-green-100 md:prose-base ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            incidunt fuga voluptatibus blanditiis tenetur autem sequi ad, vel
            suscipit eveniet, dolorum impedit, omnis qui id? Excepturi quisquam
            laudantium dolores illum.
          </p> */}
        </Section>
      </PageLayout>
    </>
  );
};

export default Home;
