import Link from "next/link";

import Container from "@/app/components/container";
import Image from "next/image";
import nwpEx1 from "@/public/nw_photography/nwp_portraits_5.jpg";

export default function HomeHero() {
  return (
    <section className="py-10 text-white bg-ink">
      <Container>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="relative aspect-[3/2] flex-1 overflow-hidden rounded md:aspect-[4/5]">
            <Image
              src={nwpEx1}
              alt="text"
              fill
              sizes="(min-width: 768px) 15vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center md:order-first">
            <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
              Hi, I'm Nate
            </h1>
            <h2 className="mt-4 max-w-xl text-2xl text-stone">
              I'm a <span className="underline">developer</span>,{" "}
              <span className="underline">photographer</span>,{" "}
              <span className="underline">world traveler</span>, and{" "}
              <span className="underline">coffee newbie</span>.
            </h2>
            <p>
              Based in Chicago, I build clean, fast websites and see every
              layout the way I’d frame a shot.
            </p>
            <div>
              <Link
                href="/"
                target="_blank"
                className="inline-flex items-center h-12 rounded bg-white px-6 text-ink border-1 border-solid hover:bg-ink hover:text-white"
              >
                View my work{" "}
                <span aria-hidden="true" className="inline-block ml-2">
                  ↗
                </span>
              </Link>
              <Link
                href="/"
                target="_blank"
                className="inline-flex items-center h-12 rounded bg-white px-6 text-ink border-1 border-solid hover:bg-ink hover:text-white"
              >
                github{" "}
                <span aria-hidden="true" className="inline-block ml-2">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
