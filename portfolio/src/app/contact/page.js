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
            <Image src='/github.png' width={100} height={98} alt="github logo" className={styles.image}></Image>
          </div>
          <div className='col-6'>
            <p>Linkedin</p>
            <Image src='/linkedin.png' width={100} height={85} alt="github logo" className={styles.image}></Image>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className='col-6'>
            <p>Resume</p>
            <Image src='/resume.png' width={100} height={100} alt="github logo" className={styles.image}></Image>
          </div>
          <div className='col-6'>
            <p>Email</p>
            <Image src='/email.png' width={100} height={100} alt="github logo" className={styles.image}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;