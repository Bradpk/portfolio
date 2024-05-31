import Navbar from "../components/navbar";
import styles from './about.module.css';
import Image from "next/image";
import Template from "../components/template";

function About() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Template>
      <div className={`container-fluid ${styles.aboutcontainer}`}>
        <Image className={styles.myself} src='/me.jpg' width={300} height={400} alt="img"></Image>
        <p>I was born and raised in Auckland, New Zealand. After graduating from high school, I attended
          college to pursue a degree in audio production. Following my college graduation, I had a
          desire to travel and spent time exploring Europe while working in the yachting
          industry. In 2019, I relocated to the United States after obtaining permanent residency. Music
          has played a significant role in my life as both a hobby and a career. I've devoted much of my adult life
          to
          music production and music education. When I'm not doing something music related or coding I also enjoy hiking, fishing, rock climbing and grabbing a
          drink with friends whenever I get the chance. Over the past eighteen months or so I've
          discovered a new interest in programming that has led me to pursue a fresh career path in the tech
          industry.</p>
          <p>June 2024<br></br>Currently job searching and always happy to chat! Get in touch if you'd like to know more. </p>
      </div>
      </Template>
    </div>
  );
}

export default About;