import Navbar from "../components/navbar";
import Image from "next/image";
import styles from './contact.module.css';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className={`container justify-content-center text-center ${styles.contactcontainer}`}>
        <div className={`row ${styles.row}`}>
          <div className='col-6'>
            <p>Github</p>
            <a target="_blank" href="https://github.com/Bradpk"><Image src='/github.png' width={100} height={98} alt="github logo" className={styles.image}></Image></a>
          </div>
          <div className='col-6'>
            <p>Linkedin</p>
            <a target="_blank" href="https://www.linkedin.com/in/brad-kerr/"><Image src='/linkedin.png' width={100} height={85} alt="github logo" className={styles.image}></Image></a>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className='col-6'>
            <p>Resume</p>
            <a target="_blank" href="https://docs.google.com/document/d/1fgNX_K_nG4fsWiiYutB4Qmi2pEdzLylWTs-th9_6S_s/edit"><Image src='/resume.png' width={100} height={100} alt="github logo" className={styles.image}></Image></a>
          </div>
          <div className='col-6'>
            <p>Email</p>
            <a target="_blank" href="mailto:Brad.pk@live.com"><Image src='/email.png' width={100} height={100} alt="github logo" className={styles.image}></Image></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;