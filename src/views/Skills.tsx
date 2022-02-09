import { useState } from "react";
import { Waypoint } from "react-waypoint";
import styled from "styled-components";
import SkillProgressBar from "../components/SkillProgressBar";
import { Section } from "../components/wrappers";
import { MorphCard } from "./Intro";

const SkillsContainer = styled.div`
  display: flex;
  margin-top: 50px;
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
    }
  }
`;

export default function Skills() {
  const [appear, setAppear] = useState(false);
  return (
    <Section id="skills">
      <div className="justify-top text-white font-bold">
        <h1>Skillsets & Experience</h1>
      </div>
      <Waypoint
        scrollableAncestor={window}
        key="skills"
        bottomOffset={400}
        onEnter={() => setAppear(true)}
      >
        <SkillsContainer>
          <MorphCard className="morph-section">
            <h2 className="font-bold text-lg text-center">
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
          <MorphCard className="morph-section">
            <h2 className="font-bold text-lg text-center">Frameworks</h2>
            <SkillProgressBar show={appear} title="React" progress={4} />
            <SkillProgressBar show={appear} title="Node" progress={3} />
            <SkillProgressBar show={appear} title="Ag-grid" progress={3} />
            <SkillProgressBar show={appear} title="Bootstrap" progress={3} />
            <SkillProgressBar show={appear} title=".NET" progress={3} />
            <SkillProgressBar show={appear} title="Tailwind" progress={2} />
            <SkillProgressBar show={appear} title="Angular" progress={2} />
          </MorphCard>
          <MorphCard className="morph-section">
            <h2 className="font-bold text-lg text-center">Testing</h2>
            <SkillProgressBar show={appear} title="Puppeteer" progress={4} />
            <SkillProgressBar show={appear} title="Cypress" progress={4} />
            <SkillProgressBar show={appear} title="Jest" progress={4} />
            <SkillProgressBar show={appear} title="Playwright" progress={3} />
          </MorphCard>
        </SkillsContainer>
      </Waypoint>
    </Section>
  );
}
