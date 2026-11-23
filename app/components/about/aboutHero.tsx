import Image from "next/image";
import headshot from "@/public/nate-headshot.jpg";

import Container from "@/app/components/container";

export default function AboutHero() {
  return (
    <section className="pt-12 pb-20 px-8 bg-white">
      <Container>
        <div className="flex gap-12 items-center justify-center flex-wrap md:flex-row-reverse md:flex-nowrap md:justify-between">
          <Image
            src={headshot}
            alt="Nate Wong holding a camera"
            sizes="(min-width: 768px) 480px, 100vw"
            className="h-auto w-full max-w-[480px]"
            placeholder="blur"
            priority
          />
          <div className="md:max-w-1/2 lg:max-w-2/3">
            <p className="font-mono text-sm text-muted">// about</p>
            <h1 className="mt-4 text-6xl font-medium tracking-tight">
              Ten years on the web. Six behind the camera.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-ink-soft">
              I’m a frontend developer in Chicago. I care about websites that
              load fast, read clearly, and feel considered down to the last
              pixel.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex h-12 items-center rounded bg-accent px-6 text-sm font-medium text-white"
            >
              Download resume
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
