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
          <div className="flex gap-4 flex-wrap mb-14 md:mb-20">
            {/** Footer Links */}
            {links.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.link}
                  target="_blank"
                  className="inline-flex items-center h-12 rounded bg-white px-6 text-ink border-1 border-solid hover:bg-ink hover:text-white"
                >
                  {link.name}{" "}
                  <span aria-hidden="true" className="inline-block ml-2">
                    ↗
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-muted mb-4" />
        <div className="text-muted text-xs">
          <span>© 2026 Nate Wong · Chicago</span>
        </div>
      </Container>
    </section>
  );
}

const links = [
  { name: "Email Me", link: "/" },
  { name: "LinkedIn", link: "/" },
  { name: "Github", link: "/" },
];
