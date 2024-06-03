import { SelectDemo } from "@components/components/landingPage/DropDownSection";
import HeroSection from "@components/components/landingPage/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <SelectDemo />
    </section>
  );
}
