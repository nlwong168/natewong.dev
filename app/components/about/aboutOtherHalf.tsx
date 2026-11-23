import Link from "next/link";
import Image from "next/image";
import Container from "@/app/components/container";

import nwpEx1 from "@/public/nw_photography/nwp_portraits_5.jpg";
import nwpEx2 from "@/public/nw_photography/nwp_portraits_3.jpg";
import nwpEx3 from "@/public/nw_photography/OSJ_White_Door_Centered.jpg";

export default function AboutOtherHalf() {
  return (
    <section className="bg-surface py-6 md:py-12">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center">
          <h2 className="text-3xl font-bold mb-4 md:w-1/3">The Other Half</h2>

          {/* Image Gallery & Text Container*/}
          <div className="w-[100%] flex flex-col justify-between gap-4 md:1-2/3 md:flex-row md:gap-10">
            {/* Image Gallery Container*/}
            <div className="w-[100%] flex gap-2">
              {/* Image Item*/}
              {photos.map((photo) => (
                <div
                  key={photo.alt}
                  className="relative aspect-[4/5] flex-1 overflow-hidden rounded"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 15vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Image Gallery Text */}
            <div className="flex flex-col justify-center">
              <p className="mb-2">
                I also shoot headshots, portraits, and real estate in Chicago.
              </p>
              <Link
                href="https://www.natewongphotography.com/"
                target="_blank"
                className="text-accent font-bold"
              >
                See my photography{" "}
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

const photos = [
  { src: nwpEx1, alt: "Baby in a milk bath with holiday decorations" },
  { src: nwpEx2, alt: "Male looking at a camera for a headshot" },
  { src: nwpEx3, alt: "Wooden door attached to a white building" },
];
