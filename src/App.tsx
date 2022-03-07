import styles from "./styles/main.module.css";
import { Container } from "./components/wrappers";
import Intro from "./views/Intro";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
import styled from "styled-components";

const StickyHeader = styled.h1`
  position: fixed;
  top: 0;
  color: white;
  padding-left: 20px;
  background: linear-gradient(145deg, #322e2e, #3c3737);
  box-shadow: 29px 29px 57px #302b2b, -29px -29px 57px #403b3b;
  width: 100%;
  font-family: "Bebas Neue", cursive;
  text-shadow: 1px solid black;
  font-size: 1.2rem;
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

      <main className={styles.main}>
        <Intro />
        <Skills />
        <Contact />
      </main>
    </Container>
  );
}
