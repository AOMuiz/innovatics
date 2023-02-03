import Head from "next/head";
import Hero from "../components/Hero";
import WhyInnovatics from "../components/WhyInnovatics";
import JoinCohort from "../components/JoinCohort";
import Practicality from "../components/Practicality";
import FeaturedSection from "../components/FeaturedSection";
import LearningsSections from "../components/LearningsSections";
import LiveSection from "../components/LiveSection";
import PricingSection from "../components/PricingSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Innovatics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <JoinCohort />
      <Practicality />
      <WhyInnovatics />
      <LearningsSections />
      <FeaturedSection />
      <PricingSection />
      <LiveSection />
    </div>
  );
}
