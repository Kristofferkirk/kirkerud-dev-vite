import profilePicture from "../public/profile-pic.png";
import { Section } from "../components/Wrappers";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { checkIfSafari } from "../utils/browserCheck";

export const MorphCard = styled.div`
  padding: 20px;
  width: 70vw;
  border-radius: 19px;
  background: linear-gradient(145deg, #322e2e, #3c3737);
`;

const IntroMorphCard = styled(MorphCard)<{ isSafari: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  box-shadow: none;
  z-index: 2;

  @media only screen and (max-width: 1200px) {
    margin-top: ${(p) => (p.isSafari ? 100 : 20)}px;
  }
`;

const MainTitle = styled.h1`
  color: white;
  font-size: 2rem;
`;

export const IntroTextSection = styled.span`
  color: white;
  margin-top: 10vh;
  font-size: 3vw;
  font-style: italic;
  font-weight: lighter;
  margin-top: 30px;
  font-family: Fira Sans;
  @media only screen and (max-width: 500px) {
    font-size: 4vw;
  }
`;

const ProfileImage = styled.img`
  max-width: 230px;

  @media only screen and (max-width: 500px) {
    max-width: 160px;
    margin-top: 20px;
    align-self: center;
  }
`;

const ProfileImageContainer = styled.div`
  @media only screen and (max-width: 1151px) {
    display: flex;
    justify-content: center;
  }
`;

export default function Intro() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  const isSafari = checkIfSafari();
  return (
    <Section id="intro">
      <animated.div style={props}>
        <IntroMorphCard isSafari={isSafari}>
          <div style={{ flex: "1 0 70%" }}>
            <MainTitle>Fullstack Developer</MainTitle>
            <p style={{ color: "white", letterSpacing: "2px" }}>Since 2018</p>
            <p style={{ color: "white", letterSpacing: "2px" }}>
              Top skills <FontAwesomeIcon icon={faCode} /> :
              <ol>
                <li>
                  <i
                    className="fa-brands fa-react mr-2"
                    style={{
                      color: "#88b5fd",
                      fontSize: "20px",
                      width: 20,
                    }}
                  />
                  React
                </li>
                <li>
                  <i
                    className="fa-brands fa-js mr-2"
                    style={{
                      color: "yellow",
                      fontSize: "20px",
                      width: 20,
                      height: 20,
                    }}
                  />
                  Javascript
                </li>
                <li>
                  <i
                    className="fa-brands fa-html5 mr-2"
                    style={{
                      color: "orange",
                      fontSize: "20px",
                      width: 20,
                      height: 20,
                    }}
                  />
                  HTML
                </li>
                <li>
                  <i
                    className="fa-brands fa-css3 mr-2"
                    style={{
                      color: "#378fff",
                      fontSize: "20px",
                      width: 20,
                      height: 20,
                    }}
                  />
                  CSS
                </li>
                <li>
                  <i
                    className="fa-brands fa-microsoft mr-2"
                    style={{
                      color: "green",
                      fontSize: "20px",
                      width: 20,
                      height: 20,
                    }}
                  />
                  C#
                </li>
                <li>
                  <i
                    className="fa-brands fa-python mr-2"
                    style={{
                      color: "white",
                      fontSize: "20px",
                      width: 20,
                      height: 20,
                    }}
                  />
                  Python
                </li>
              </ol>
            </p>
          </div>
          <ProfileImageContainer style={{ flex: "1 1 30%" }}>
            <ProfileImage src={profilePicture} />
          </ProfileImageContainer>
          <IntroTextSection>
            I’ve been an IT consultant for over three years, i’ve met many
            clients, users and co-developers during this time and while the
            views are different, one goal we all had in common: a great
            experience.
          </IntroTextSection>
        </IntroMorphCard>
      </animated.div>
    </Section>
  );
}
