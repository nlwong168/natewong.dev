import Container from "@/app/components/container";

export default function AboutToolkit() {
  return (
    <section className="py-6 md:py-12">
      <Container>
        <div className="flex flex-col md:flex-row">
          <h2 className="text-3xl font-bold mb-4 md:w-1/3">Toolkit</h2>

          {/* Experience Item Container */}
          <div className="w-[100%] flex flex-wrap justify-between gap-[12px] md:1-2/3 md:justify-aroiund md:gap-[36px]">
            {/* Experience Item */}

            {toolkit.map((item) => (
              <div key={item.type} className="max-w-[240px] justify-evenly">
                <h3 className="text-sm text-gray-600 mb-4">{item.type}</h3>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const toolkit = [
  {
    type: "// frontend",
    name: " React · Next.js · TailwindCSS · TypeScript · JavaScript · HTML · CSS",
  },
  {
    type: "// styling",
    name: "CSS · SCSS · Bootstrap · TailwindCSS",
  },
  {
    type: "// styling 1",
    name: "CSS · SCSS · Bootstrap · TailwindCSS",
  },
  {
    type: "// styling 2",
    name: "CSS · SCSS · Bootstrap · TailwindCSS",
  },
];
