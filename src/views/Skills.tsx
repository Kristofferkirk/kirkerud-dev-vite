import { useEffect, useRef, useState } from "react";
import { Waypoint } from "react-waypoint";
import styled from "styled-components";
import { H1 } from "../components/Headings";
import SkillProgressBar from "../components/SkillProgressBar";
import { Section } from "../components/Wrappers";
import { MorphCard } from "./Intro";

const SkillsContainer = styled.div`
  display: flex;
  width: 80%;
  color: white;
  .morph-section {
    margin: 15px;
  }
  @media only screen and (max-width: 750px) {
    flex-direction: column;
    .morph-section {
      max-height: 200px;
      overflow: hidden;
      overflow-y: scroll;
      &.hide-mobile {
        display: none;
      }
    }
  }
  @media only screen and (min-width: 750px) {
    .show-mobile {
      display: none;
    }
  }
`;

export const HeaderContainer = styled.div`
  border-radius: 10px;
  padding: 5px;
  background: linear-gradient(145deg, #322e2e, #110d0d);
  margin-top: 50px;

  @media (min-width: 1300px) {
    margin-top: 160px;
  }
`;

export default function Skills() {
  const [appear, setAppear] = useState(false);
  const [startScroll, setStartScroll] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [timer, setTimer] = useState(0);
  function handleVisible() {
    setAppear(true);
    setStartScroll(true);
  }

  function smoothAutoScroll() {
    if (cardRef.current) {
      cardRef.current.scrollBy(0, 1);
      setTimer(window.setTimeout(smoothAutoScroll, 100));
    }
  }
  function stopAutoScroll() {
    clearTimeout(timer);
    if (cardRef.current) cardRef.current.scrollTop = 0;
  }

  useEffect(() => {
    if (startScroll) {
      smoothAutoScroll();
    }
  }, [startScroll]);
  return (
    <Section id="skills">
      <HeaderContainer className="justify-top text-white font-bold mt-6">
        <H1 style={{ textShadow: "1px 1px 2px black" }}>
          Skillsets & Experience
        </H1>
      </HeaderContainer>
      <Waypoint
        scrollableAncestor={window}
        key="skills"
        bottomOffset={400}
        onLeave={() => stopAutoScroll()}
        onEnter={() => handleVisible()}
      >
        <SkillsContainer>
          <MorphCard className="morph-section hide-mobile">
            <h2 className="font-bold text-lg text-center ">
              Programming Languages
            </h2>
            <SkillProgressBar show={appear} title="Javascript" progress={4} />
            <SkillProgressBar show={appear} title="HTML" progress={4} />
            <SkillProgressBar
              show={appear}
              title="Powershell/Bash"
              progress={4}
            />
            <SkillProgressBar show={appear} title="CSS" progress={4} />
            <SkillProgressBar show={appear} title="C#" progress={3} />
            <SkillProgressBar show={appear} title="Python" progress={3} />
          </MorphCard>
          <MorphCard className="morph-section hide-mobile">
            <h2 className="font-bold text-lg text-center">Frameworks</h2>
            <SkillProgressBar show={appear} title="React" progress={4} />
            <SkillProgressBar show={appear} title="Node" progress={3} />
            <SkillProgressBar show={appear} title="Ag-grid" progress={3} />
            <SkillProgressBar show={appear} title="Bootstrap" progress={3} />
            <SkillProgressBar show={appear} title=".NET" progress={3} />
            <SkillProgressBar show={appear} title="Tailwind" progress={2} />
            <SkillProgressBar show={appear} title="Angular" progress={2} />
          </MorphCard>
          <MorphCard className="morph-section hide-mobile">
            <h2 className="font-bold text-lg text-center">Testing</h2>
            <SkillProgressBar show={appear} title="Puppeteer" progress={4} />
            <SkillProgressBar show={appear} title="Cypress" progress={4} />
            <SkillProgressBar show={appear} title="Jest" progress={4} />
            <SkillProgressBar show={appear} title="Playwright" progress={3} />
          </MorphCard>
          <MorphCard
            className="morph-section show-mobile"
            ref={cardRef}
            style={{
              height: "100%",
              maxHeight: "600px",
              width: "80vw",
              margin: 0,
            }}
          >
            <SkillProgressBar show={appear} title="Javascript" progress={4} />
            <SkillProgressBar show={appear} title="HTML" progress={4} />
            <SkillProgressBar
              show={appear}
              title="Powershell/Bash"
              progress={4}
            />
            <SkillProgressBar show={appear} title="React" progress={4} />
            <SkillProgressBar show={appear} title="Puppeteer" progress={4} />
            <SkillProgressBar show={appear} title="Cypress" progress={4} />
            <SkillProgressBar show={appear} title="Jest" progress={4} />
            <SkillProgressBar show={appear} title="CSS" progress={4} />
            <SkillProgressBar show={appear} title="C#" progress={3} />
            <SkillProgressBar show={appear} title="Python" progress={3} />
            <SkillProgressBar show={appear} title="Node" progress={3} />
            <SkillProgressBar show={appear} title="Ag-grid" progress={3} />
            <SkillProgressBar show={appear} title="Bootstrap" progress={3} />
            <SkillProgressBar show={appear} title=".NET" progress={3} />
            <SkillProgressBar show={appear} title="Playwright" progress={3} />
            <SkillProgressBar show={appear} title="Tailwind" progress={2} />
            <SkillProgressBar show={appear} title="Angular" progress={2} />
            <div />
          </MorphCard>
        </SkillsContainer>
      </Waypoint>
    </Section>
  );
}
