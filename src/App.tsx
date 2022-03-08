import styles from "./styles/main.module.css";
import { Container } from "./components/Wrappers";
import Intro from "./views/Intro";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
import styled from "styled-components";
import { H1 } from "./components/Headings";

const StickyHeader = styled(H1)`
  position: fixed;
  top: 0;
  color: white;
  padding-left: 20px;
  background: linear-gradient(145deg, #322e2e, #3c3737);
  width: 100%;
  font-family: "Bebas Neue", cursive;
  text-shadow: 10px solid black;
  font-size: 2rem;
  z-index: 2;
`;

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

      <StickyHeader className={styles.title}>Kristoffer Kirkerud</StickyHeader>

      <main>
        <Intro />
        <Skills />
        <Contact />
      </main>
    </Container>
  );
}
