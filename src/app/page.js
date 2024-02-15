import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Template from "./components/template";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bradley K</title>
      </Head>
      <Navbar />
      <Template>
        <Header />
      </Template>
    </>
  );
}
