import profilePicture from "../public/profile-pic.png";
import { Section } from "../components/Wrappers";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

export const MorphCard = styled.div`
  padding: 20px;
  width: 70vw;
  border-radius: 19px;
  background: linear-gradient(145deg, #322e2e, #3c3737);
`;

const MainTitle = styled.h1`
  color: white;
  font-size: 2rem;
`;

export default function Intro() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  return (
    <Section id="intro">
      <animated.div style={props}>
        <MorphCard
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            boxShadow: "none",
            zIndex: 2,
          }}
        >
          <div style={{ flex: "1 0 70%" }}>
            <MainTitle>Fullstack Developer</MainTitle>

            <p style={{ color: "white" }}>Since 2018</p>
            <p style={{ color: "white" }}>Javascript, Python, C#</p>
            <p style={{ color: "white" }}>React</p>
          </div>
          <div style={{ flex: "1 1 30%" }}>
            <img style={{ maxWidth: "230px" }} src={profilePicture} />
          </div>
        </MorphCard>
      </animated.div>
    </Section>
  );
}
