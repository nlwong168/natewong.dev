import Container from "@/app/components/container";
import { work } from "@/content/work";

export default function HomeLatestWork() {
  return (
    <section>
      <Container>
        <h2>Latest</h2>
        <ul>
          {work.map((item) => (
            <li key={item.slug}>
              <p>
                {item.type} · {item.date}
              </p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
