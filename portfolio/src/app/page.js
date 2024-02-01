import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

export default function Home() {
  return (
  <>
  <Navbar />
  <Header />
  </>
  );
}
