import Navbar from "../components/navbar";
import Image from "next/image";
import styles from './contact.module.css';

function Contact() {
  return (
    <div>
    <Navbar />
    <div className={`container justify-content-center text-center ${styles.contactcontainer}`}>
      <div className='row'>
      <p className='col-6'>Github</p>
      <p className='col-6'>Linkedin</p>
      </div>
      <div className='row'>
      <p className='col-6'>Resume</p>
      <p className='col-6'>Email</p>
        </div>
  </div>
    </div>
  );
}

export default Contact;