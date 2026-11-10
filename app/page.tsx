export default function Home() {
  return (
    <main className="mx-auto max-w-[1120px] px-8 py-24">
      <p className="font-mono text-sm text-muted">// hello, world</p>
      <h1 className="mt-4 text-6xl font-medium tracking-tight">
        Hi, I’m Nate.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">
        Frontend developer in Chicago, building clean, fast websites with a
        photographer’s eye.
      </p>
      <a
        href="#"
        className="mt-8 inline-flex h-12 items-center rounded bg-accent px-6 text-sm font-medium text-white"
      >
        View my work
      </a>
    </main>
  );
}
