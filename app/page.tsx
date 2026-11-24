import Container from "@/app/components/container";
import HomeLatestWork from "./components/home/homeLatestWork";

export default function Home() {
  return (
    <main>
      <Container>
        <h1 className="text-4xl font-bold">Hello, This is the homepage.</h1>
        <p className="mt-4 text-lg">
          I’m a frontend developer in Chicago, building clean, fast websites
          with a photographer’s eye.
        </p>
        <HomeLatestWork />
      </Container>
    </main>
  );
}
