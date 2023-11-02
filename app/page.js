import React from "react";
import Hero from "./Home-component/Hero";
import Interview from "./Home-component/Interview";
import Interviwer from "./Home-component/Interviwer";
import Media from "./Home-component/Media";
import Simple from "./Home-component/Simple";
import Testimonials from "./Home-component/Testimonials";
import Card from "./Home-component/Card";
import Bannercard from "./Home-component/Bannercard";

export const metadata = {
  title: "NokNok",
  description: " Description",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Bannercard />
      <Interview />
      <Interviwer />
      <Media />
      <Simple />

      <Testimonials />
      <Card />
    </main>
  );
}
