// CONTACT

import { GiOwl } from "react-icons/gi";
import Link from "next/link";

import PageTitle from "@components/shared/PageTitle";
import PageLayout from "@components/layout/PageLayout";
import Section from "@components/shared/Section";

const title = "Owl";
const subtitle = "Send me an owl. Let's work togther and create magic.";

export default function spells() {
  return (
    <PageLayout pageMeta={{ title: "Send An Owl" }}>
      <PageTitle title={title} subtitle={subtitle} />
      <Section linebreak>
        <h2 className="mb-8 text-center font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl">
          Pick An Owl
        </h2>
        <div className="grid grid-cols-1 gap-4  md:grid-cols-3">
          <Link href="mailto:jamesmidzi@gmail.com" passHref>
            <a className="flex flex-col items-center justify-center gap-1 text-3xl transition duration-300 hover:text-white md:text-5xl">
              <GiOwl className="text-5xl" />
              <span className="text-xl">Luthor</span>
            </a>
          </Link>
          <Link href="mailto:jamesmidzi@gmail.com" passHref>
            <a className="flex flex-col items-center justify-center gap-1 text-3xl transition duration-300 hover:text-white md:text-5xl">
              <GiOwl className="text-5xl" />
              <span className="text-xl">Luthor</span>
            </a>
          </Link>
          <Link href="mailto:jamesmidzi@gmail.com" passHref>
            <a className="flex flex-col items-center justify-center gap-1 text-3xl transition duration-300 hover:text-white md:text-5xl">
              <GiOwl className="text-5xl" />
              <span className="text-xl">Luthor</span>
            </a>
          </Link>
        </div>
        {/* <form className="mx-auto flex w-3/4 flex-col gap-4 ">
          <div>
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              className="w-full px-4 py-2 text-black"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              name="email"
              placeholder="Email"
              id="email"
              className="w-full px-4 py-2 text-black "
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              required
              rows="4"
              name="message"
              placeholder="Message"
              id="message"
              className="w-full px-4 py-2 text-black focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          <button className="bg-green-900 py-2 px-4 text-green-100 transition duration-300 hover:bg-green-800">
            Send
          </button>
        </form> */}
      </Section>
    </PageLayout>
  );
}
