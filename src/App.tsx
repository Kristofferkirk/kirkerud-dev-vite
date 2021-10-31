import styles from "./styles/main.module.css";
import githublink from "./public/github.png";
import twitterLink from "./public/twitter.jpg";
import linkedin from "./public/linkedin.png";
import profilePicture from "./public/profile.jpeg";
import SkillProgressBar from "./components/SkillProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import EmailCopyButton from "./components/EmailCopyButton";

export default function App() {
  return (
    <div className={styles.container}>
      <header>
        <title>Kristoffer Kirkerud | Developer</title>
        <meta
          name="description"
          content="Gothenburg, Sweden based fullstack developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </header>

      <h1 className={styles.title}>Kirkerud.dev</h1>

      <main className={styles.main}>
        <div id="intro" className={styles.section}>
          <div className={styles.grid}>
            <div className={styles.glassCard}>
              <img src={profilePicture} />

              <p className={styles.description + " mt-4"}>
                Hello! My name is Kristoffer, i am a fullstack developer from
                Gothenburg, Sweden. I love everything tech related and i am
                always curious to learn more. <br /> I started my journey as a
                developer in 2015 and been hooked ever since.
              </p>
            </div>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                className={styles.regularIcon}
                icon={faChevronDown}
              />
            </div>

            <div className={styles.sectionContent}></div>
          </div>
        </div>
        <div id="skills" className={styles.section}>
          <div className="justify-top text-white font-bold">
            <h1 className={styles.georamaTitle}>Skillsets & Experience</h1>
          </div>
          <div className={styles.groupedGrid}>
            <div className={styles.glassCard}>
              <h2 className="font-bold text-lg text-center">
                Programming Languages
              </h2>
              <SkillProgressBar title="Javascript" progress={4} />
              <SkillProgressBar title="HTML" progress={4} />
              <SkillProgressBar title="Powershell/Bash" progress={4} />
              <SkillProgressBar title="C#" progress={3} />
              <SkillProgressBar title="Python" progress={3} />
              <SkillProgressBar title="CSS" progress={3} />
            </div>
            <div className={styles.glassCard}>
              <h2 className="font-bold text-lg text-center">Frameworks</h2>
              <SkillProgressBar title="React.js" progress={4} />
              <SkillProgressBar title="Node.js" progress={3} />
              <SkillProgressBar title="Ag-grid" progress={3} />
              <SkillProgressBar title="Bootstrap" progress={3} />
              <SkillProgressBar title=".NET Core" progress={3} />
              <SkillProgressBar title="Tailwind" progress={2} />
              <SkillProgressBar title="Angular 4" progress={2} />
            </div>
            <div className={styles.glassCard}>
              <h2 className="font-bold text-lg text-center">Testing</h2>
              <SkillProgressBar title="Puppeteer" progress={4} />
              <SkillProgressBar title="Jest" progress={4} />
              <SkillProgressBar title="Playwright" progress={3} />
            </div>
            <div className={styles.glassCard}>
              <h2 className="font-bold text-lg text-center">Cloud</h2>
              <SkillProgressBar title="Azure Devops" progress={4} />
              <SkillProgressBar title="Application Insights" progress={3} />
              <SkillProgressBar title="Azure Pipelines" progress={3} />
              <SkillProgressBar title="Sharepoint" progress={3} />
              <SkillProgressBar title="Azure" progress={3} />
              <SkillProgressBar title="Google Domains" progress={3} />
            </div>
            <div className={styles.glassCard}>
              <h2 className="font-bold text-lg text-center">Tools</h2>
              <SkillProgressBar title="VSCode" progress={5} />
              <SkillProgressBar title="Docker" progress={4} />

              <SkillProgressBar title="Git" progress={4} />
              <SkillProgressBar title="Microsoft Teams" progress={4} />
              <SkillProgressBar title="Ubuntu" progress={3} />
              <SkillProgressBar title="Photoshop" progress={2} />
            </div>
          </div>
        </div>
        <div id="contact" className={styles.section}>
          <div className="justify-top text-white font-bold">
            <h1 className={styles.georamaTitle}>Contact me</h1>
          </div>
          <div className={styles.glassCard}>
            <div className="text-justify">
              <p className={styles.centerDescription}>
                I am always open for a chat!
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-center font-bold mb-5 text-2xl">Email</h3>
              <EmailCopyButton />
            </div>
            <div className="mt-5">
              <h3 className="text-center font-bold mb-5 text-2xl">
                Social pages
              </h3>
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
              <h3 className="text-center font-bold mb-5 text-2xl ">
                Repositories
              </h3>
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
          </div>
        </div>
      </main>
    </div>
  );
}
