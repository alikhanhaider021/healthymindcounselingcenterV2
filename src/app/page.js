
import Image from "next/image";

import BannnerSliders from "@/components/Home/bannersilder/BannerSlider";
import FooterSection from "@/components/layout/footer/Footer";
import IntroSection from "@/components/Home/introsection/IntroSection";
import VideoCouncellingSection from "@/components/Home/videocouncelligsection/VideoCouncellingSection";
export default function Home() {
  return (
   <>
   
<BannnerSliders/>
 <IntroSection/>
 <VideoCouncellingSection/>
   
   </>
  );
}
