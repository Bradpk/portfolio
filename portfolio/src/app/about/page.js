import Navbar from "../components/navbar";
import styles from './about.module.css';
import Image from "next/image"; 

function About() {
  return (
    <div>
    <Navbar />
    <div className={`container ${styles.aboutcontainer}`}>
    <Image className={styles.myself} src='/me.png' width={300} height={400} alt="img"></Image>
      <p>I was born and raised in Auckland, New Zealand. After graduating from high school, I attended
					college to pursue a degree in audio production. Following my college graduation, I had a
					desire to travel and spent time exploring Europe while working in the yachting
					industry. In 2019, I relocated to the United States after obtaining permanent residency. Music
					has played a significant role as both a hobby and a career. I've devoted much of my adult life
					to
					music production and music education. I also enjoy hiking, fishing, rock climbing and grabbing a
					drink with friends whenever I get the chance.<br></br><br></br>While my passion for music remains, I've
					discovered a new interest in programming that has led me to pursue a fresh career path in the tech
					industry.</p>

    </div>
    </div>
  );
}

export default About;