import { Section } from "../components/wrappers";
import githublink from "../public/github.png";
import twitterLink from "../public/twitter.jpg";
import linkedin from "../public/linkedin.png";
import { MorphCard } from "./Intro";

export default function Contact() {
  return (
    <Section id="contact" className="text-white">
      <MorphCard>
        <div className="flex justify-center">
          <h1 className="text-white"> Contact</h1>
        </div>
        <div className="flex justify-center mt-3">
          <div>
            <a
              href="https://qrew.se/home"
              rel="noreferrer noopener"
              title="qrew"
              target="_blank"
            >
              <img
                width={120}
                height={100}
                alt="qrew-logo"
                src="https://img1.wsimg.com/isteam/ip/ed9530d8-0060-47b9-b421-294b857055ae/Qrew%20Text%20Logo%20-%20Transparent%20-%20White-0002.png/:/rs=h:100,cg:true,m"
              />
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-center font-bold mb-5 text-2xl">Links</h3>
          <div className="flex items-end justify-center">
            <a
              href="https://linkedin.com/in/kristoffer-kirkerud"
              rel="noreferrer noopener"
              target="_blank"
              className="ml-2"
            >
              <img
                className="bg-white rounded-lg"
                width={40}
                height={40}
                alt="linkedin"
                src={linkedin}
              />
            </a>
            <a
              href="https://twitter.com/kriskirkerud"
              rel="noreferrer noopener"
              target="_blank"
              className="ml-2"
            >
              <img
                width={40}
                className="bg-white rounded-lg"
                height={40}
                alt="twitter"
                src={twitterLink}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/Kristofferkirk"
            >
              <img width={40} height={40} alt="github" src={githublink} />
            </a>
          </div>
        </div>
      </MorphCard>
    </Section>
  );
}
