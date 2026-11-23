import Link from "next/link";

import Container from "@/app/components/container";

export default function Footer() {
  return (
    <section className="text-white bg-ink py-6 md:py-12">
      <Container>
        <div>
          <p className="text-sm text-white-600 mb-4">// contact</p>
          <h2 className="text-5xl font-bold mb-6">let's build something.</h2>
          <p className="mb-8">
            I’m looking for frontend roles in Chicago or remote, and I take on a
            few freelance projects at a time.
          </p>
          <a
            href="/"
            className="inline-flex items-center h-12 rounded bg-white px-6 text-ink"
          >
            link
          </a>
        </div>
      </Container>
    </section>
  );
}
