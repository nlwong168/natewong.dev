import Container from "@/app/components/container";
import HomeHero from "./components/home/homeHero";
import HomeLatestWork from "./components/home/homeLatestWork";

export default function Home() {
  return (
    <main>
      <Container>
        <HomeHero />
        <HomeLatestWork />
      </Container>
    </main>
  );
}
