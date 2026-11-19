import Container from "@/app/components/container";

export default function AboutStory() {
  return (
    <section className="py-6 md:py-12">
      <Container>
        <div className="flex flex-col md:flex-row">
          <h2 className="text-3xl font-bold mb-4 md:w-1/2">My Story</h2>
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold">
              I’ve been building for the web for over a decade, and I’ve spent
              just as long learning to see like a photographer.
            </h3>
            <p className="mt-4">
              I started out writing HTML, CSS, PHP, and JavaScript, then worked
              as a frontend developer and later web manager at Cars.com, where I
              learned how real teams ship and maintain big sites.
            </p>
            <p className="mt-4">
              My photography started during the Disney College Program at
              Disneyland, and I’ve trained in portraiture ever since. It taught
              me to notice what people feel before they see it: spacing, light,
              rhythm. I bring that to every interface I build.
            </p>
            <p className="mt-4">
              Today I run Wong Media, a small photo and web studio, and I’m
              sharpening my React and Next.js skills one shipped project at a
              time. [Add one human detail here: something you love outside
              work.]
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
