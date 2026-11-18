import Link from "next/link";
import Container from "@/app/components/container";

export default function Navbar() {
  return (
    <header>
      <Container>
        <div className="flex justify-between py-7 px-8">
          <h1 className="text-sm">nate wong</h1>
          <nav className="grid grid-flow-col gap-6 text-sm">
            <Link href="/">// Home</Link>
            <Link href="/about">// About</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
