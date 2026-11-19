import Container from "@/app/components/container";

export default function AboutHero() {
  return (
    <section className="mt-12 mb-20 mx-8">
      <Container>
        <div className="md:flex gap-12 align-center justify-center flex-wrap md:flex-row-reverse md:flex-nowrap md:justify-between">
          <img
            src="/globe.svg"
            alt="About me"
            className="mb-8 rounded-lg shadow-lg"
            width="100px"
            height="100px"
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
