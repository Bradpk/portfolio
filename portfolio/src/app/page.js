import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./projects/page";

export default function Home() {
  return (
  <>
  <Navbar />
  <Header />
  </>
  );
}
