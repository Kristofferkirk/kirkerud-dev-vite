import { Section } from "../components/Wrappers";
import githublink from "../public/github.svg";
import twitterLink from "../public/twitter-square.svg";
import linkedin from "../public/linkedin-square.svg";
import { MorphCard } from "./Intro";
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

export default function Contact() {
  return (
    <Section id="contact" className="text-white">
      <HeaderContainer>
        <H1> Contact & Links</H1>
      </HeaderContainer>
      <MorphCard>
        <H2>Employeer</H2>
        <div className="flex mt-3 justify-items-cente">
          <div style={{ flex: "1 0 100%", alignSelf: "center" }}>
            <a
              href="https://qrew.se/home"
              rel="noreferrer noopener"
              title="qrew"
              target="_blank"
            >
              <img
                alt="qrew-logo"
                width={100}
                src="https://img1.wsimg.com/isteam/ip/ed9530d8-0060-47b9-b421-294b857055ae/Qrew%20Text%20Logo%20-%20Transparent%20-%20White-0002.png/:/rs=h:100,cg:true,m"
              />
            </a>
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <h3 style={{ textAlign: "center" }}>
            Where you can find more about me
          </h3>
        </div>

        <LinksContainer>
          <a
            href="https://linkedin.com/in/kristoffer-kirkerud"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img width={40} height={40} alt="linkedin" src={linkedin} />
          </a>
          <a
            href="https://twitter.com/kriskirkerud"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img width={40} height={40} alt="twitter" src={twitterLink} />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/Kristofferkirk"
          >
            <img width={40} height={40} alt="github" src={githublink} />
          </a>
        </LinksContainer>
      </MorphCard>
    </Section>
  );
}
