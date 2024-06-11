import Head from "next/head";
import { Inter } from "next/font/google";
import NavBar from "../../components/navBar";
import HeroSection from "../../components/heroSection";
import AboutMe from "../../components/aboutMe";
import MySkills from "../../components/mySkills";
import MyWork from "../../components/myWork";
import Socials from "../../components/socials";
import Footer from "../../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Richie Mugambi</title>
        <meta name="description" content="I am Richie Mugambi, a software engineer passionate about creating applications and systems that work seamlessly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <HeroSection />
        <AboutMe />
        <MySkills />
        <MyWork />
        <Socials />
        <Footer />
      </main>
    </>
  );
}
