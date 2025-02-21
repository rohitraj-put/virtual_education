import React from "react";
import Carousel from "../components/Carousel";
import PopularCourse from "../components/PopularCourse";
import HeroRegister from "../components/HeroRegister";
import Feedback from "../components/Feedback";
import { TextParallaxContentExample } from "../components/Features";
import ShuffleHero from "../components/ShuffleHero";
import FreeTrialHero from "../components/FreeTrialHero";

export default function Home() {
  return (
    <div>
      <Carousel />
      <ShuffleHero />
      <PopularCourse />
      <TextParallaxContentExample />
      <HeroRegister />
      <FreeTrialHero />
      <Feedback />
    </div>
  );
}
