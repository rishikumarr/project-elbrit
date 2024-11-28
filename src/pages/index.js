import Head from "next/head";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import IngredientsSection from "./components/IngredientsSection";
import OurBlogsSection from "./components/OurBlogsSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elbrit life Services</title>
        <meta name="title" content="Elbrit life Services" />
        <meta name="description" content="Our team are passionate about all forms of medicine and the science behind each, unwavering in our commitment to deliver the best product possible." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Elbrit life Services" />
        <meta property="og:description" content="Our team are passionate about all forms of medicine and the science behind each, unwavering in our commitment to deliver the best product possible." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Elbrit life Services" />
        <meta property="twitter:description" content="Our team are passionate about all forms of medicine and the science behind each, unwavering in our commitment to deliver the best product possible." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="sections">
        <HeroSection/>
        <FeaturesSection/>
        <IngredientsSection/>
        <OurBlogsSection/>
        <FooterSection/>
        <a href="https://rishikarthik.com/" className="sticky-dev-info" target="_blank">Designed and Deployed by Rishikarthik</a>
      </main>
    </>
  );
}
