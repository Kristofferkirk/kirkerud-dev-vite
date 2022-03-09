import { Section } from "../components/Wrappers";
import { IntroTextSection, MorphCard } from "./Intro";
import styled from "styled-components";
import { H1, H2 } from "../components/Headings";
import { HeaderContainer } from "./Skills";

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  a:not(first-child) {
    margin-left: 10px;
  }
`;

const SocialLink = styled.i`
  font-size: 4rem;
  &.fa-linkedin {
    color: #4e68b7;
  }
  &.fa-twitter-square {
    color: #61a4b9;
  }
  &.fa-github-square {
    color: #b9b9c1;
  }
`;

export default function Contact() {
  return (
    <Section id="contact" className="text-white">
      <HeaderContainer>
        <H1> Contact & Links</H1>
      </HeaderContainer>
      <MorphCard>
        <IntroTextSection>
          There are many different approaches, frameworks, languages and methods
          in software development, it’s easy to get lost and nothing is
          considered to be the answer to everything. That is why it’s always
          important to keep in mind that the end result should be a great
          experience: for the users using the product, the client who finds use
          of the system and helps their business and the developers working
          together to build it.
        </IntroTextSection>
      </MorphCard>

      <MorphCard>
        <H2 style={{ textAlign: "center" }}>Where i work</H2>
        <a
          href="https://qrew.se/home"
          rel="noreferrer noopener"
          title="qrew"
          target="_blank"
          className="mt-2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            alt="qrew-logo"
            style={{ width: "20vw", maxWidth: "260px" }}
            src="https://img1.wsimg.com/isteam/ip/ed9530d8-0060-47b9-b421-294b857055ae/Qrew%20Text%20Logo%20-%20Transparent%20-%20White-0002.png/:/rs=h:100,cg:true,m"
          />
        </a>
        <div className="flex mt-3 justify-items-center">
          <div style={{ flex: "1 0 auto" }}>
            <p style={{ textAlign: "center" }}>
              Contact me or check out my personal projects
            </p>
          </div>
        </div>

        <LinksContainer>
          <a
            href="https://linkedin.com/in/kristoffer-kirkerud"
            rel="noreferrer noopener"
            target="_blank"
          >
            <SocialLink className="fa-brands fa-linkedin"></SocialLink>
          </a>
          <a
            href="https://twitter.com/kriskirkerud"
            rel="noreferrer noopener"
            target="_blank"
          >
            <SocialLink className="fa-brands fa-twitter-square twitter"></SocialLink>
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/Kristofferkirk"
          >
            <SocialLink className="fa-brands fa-github-square"></SocialLink>
          </a>
        </LinksContainer>
      </MorphCard>
    </Section>
  );
}
