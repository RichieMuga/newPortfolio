import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "../../components/navBar";
import HeroSection from "../../components/heroSection";
import AboutMe from "../../components/aboutMe";
import MySkills from "../../components/mySkills";
import MyWork from "../../components/myWork";
import Socials from "../../components/socials";
import ContactForm from "../../components/form";
import Footer from "../../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Richie Mugambi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <HeroSection />
        <AboutMe />
        <MySkills />
        <MyWork />
        <ContactForm />
        <Socials />
        <Footer />
      </main>
    </>
  );
}
