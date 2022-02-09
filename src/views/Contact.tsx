import EmailCopyButton from "../components/EmailCopyButton";
import { GlassCard, Section } from "../components/wrappers";
import githublink from "../public/github.png";
import twitterLink from "../public/twitter.jpg";
import linkedin from "../public/linkedin.png";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="justify-top text-white font-bold">
        <h1>Contact me</h1>
      </div>
      <GlassCard>
        <div className="text-justify">
          <p>I am always open for a chat!</p>
        </div>

        <div className="mt-10">
          <h3 className="text-center font-bold mb-5 text-2xl">Email</h3>
          <EmailCopyButton />
        </div>
        <div className="mt-5">
          <h3 className="text-center font-bold mb-5 text-2xl">Social pages</h3>
          <div className="flex items-end justify-center">
            <a
              href="https://linkedin.com/in/kristoffer-kirkerud"
              rel="noreferrer"
              target="_blank"
              className="ml-2"
            >
              <img
                className="bg-white rounded-lg"
                width={60}
                height={60}
                alt="linkedin"
                src={linkedin}
              />
            </a>
            <a
              href="https://twitter.com/kriskirkerud"
              rel="noreferrer"
              target="_blank"
              className="ml-2"
            >
              <img
                width={60}
                className="bg-white rounded-lg"
                height={60}
                alt="twitter"
                src={twitterLink}
              />
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-center font-bold mb-5 text-2xl ">Repositories</h3>
          <div className="flex items-end justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kristofferkirk"
            >
              <img width={60} height={60} alt="github" src={githublink} />
            </a>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
