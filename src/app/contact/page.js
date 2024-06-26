import Navbar from "../components/navbar";
import Image from "next/image";
import styles from './contact.module.css';
import Template from "../components/template";

function Contact() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Template>
      <div className={`container justify-content-center text-center ${styles.contactcontainer}`}>
        <div className={`row ${styles.row}`}>
          <div className='col-sm-6 col-12'>
            <p>GITHUB</p>
            <a target="_blank" href="https://github.com/Bradpk"><Image src='/github.png' width={100} height={98} alt="github logo" className={styles.image}></Image></a>
          </div>
          <div className='col-sm-6 col-12'>
            <p>LINKEDIN</p>
            <a target="_blank" href="https://www.linkedin.com/in/brad-kerr/"><Image src='/linkedin.png' width={100} height={85} alt="github logo" className={styles.image}></Image></a>
          </div>
  
          <div className='col-sm-6 col-12'>
            <p>RESUME</p>
            <a target="_blank" href="https://docs.google.com/document/d/1fgNX_K_nG4fsWiiYutB4Qmi2pEdzLylWTs-th9_6S_s/edit"><Image src='/resume.png' width={100} height={100} alt="github logo" className={styles.image}></Image></a>
          </div>
          <div className='col-sm-6 col-12'>
            <p>EMAIL</p>
            <a target="_blank" href="mailto:Brad.pk@live.com"><Image src='/email.png' width={100} height={100} alt="github logo" className={styles.image}></Image></a>
          </div>
        </div>
      </div>
      </Template>
    </div>
  );
}

export default Contact;