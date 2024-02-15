import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Template from "./components/template";

export default function Home() {
  return (
    <>
      <Navbar />
      <Template>
        <Header />
      </Template>
    </>
  );
}
