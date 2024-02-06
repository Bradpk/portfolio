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
            <img src='/github.png' alt="github logo" className={styles.image}></img>
          </div>
          <div className='col-6'>
            <p>Linkedin</p>
            <img src='/linkedin.png' alt="github logo" className={styles.image}></img>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className='col-6'>
            <p>Resume</p>
            <img src='/resume.png' alt="github logo" className={styles.image}></img>
          </div>
          <div className='col-6'>
            <p>Email</p>
            <img src='/email.png' alt="github logo" className={styles.image}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;