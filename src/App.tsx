import styles from "./styles/main.module.css";
import { Container } from "./components/wrappers";
import Intro from "./views/Intro";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
export default function App() {
  return (
    <Container>
      <header>
        <title>Kristoffer Kirkerud | Developer</title>
        <meta
          name="description"
          content="Gothenburg, Sweden based fullstack developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </header>

      <h1 className={styles.title}>Kristoffer Kirkerud</h1>

      <main className={styles.main}>
        <Intro />
        <Skills />
        <Contact />
      </main>
    </Container>
  );
}
