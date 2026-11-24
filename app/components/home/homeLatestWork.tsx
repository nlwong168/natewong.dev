import Container from "@/app/components/container";
import Image from "next/image";
import { work } from "@/content/work";

export default function HomeLatestWork() {
  return (
    <section className="py-6 md:py-12">
      <Container>
        <div className="flex content-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest</h2>
          <span>// projects</span>
        </div>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <li key={item.slug}>
              <div className="relative aspect-[3/2] flex-1 overflow-hidden rounded mb-2">
                <Image
                  src={item.photo}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 15vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p>
                <span className="text-accent">{item.type}</span> · {item.date}
              </p>
              <h3 className="text-xl my-2">{item.title}</h3>
              <p>{item.summary}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
