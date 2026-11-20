import Link from "next/link";
import Container from "@/app/components/container";

export default function AboutOtherHalf() {
  return (
    <section className="bg-surface py-6 md:py-12">
      <Container>
        <div className="flex flex-col md:flex-row">
          <h2 className="text-3xl font-bold mb-4 md:w-1/3">The Other Half</h2>

          {/* Image Gallery & Text Container*/}
          <div className="w-[100%] flex md:1-2/3">
            {/* Image Gallery*/}
            <div></div>

            {/* Image Gallery Text */}
            <div>
              <p>
                I also shoot headshots, portraits, and real estate in Chicago.
              </p>
              <Link href="/">See my photography</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
