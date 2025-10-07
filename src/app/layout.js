
import HeaderNavbar from "@/components/layout/header/Header";
import "./globals.css";

import Home from "./page";
import BannnerSliders from "@/components/Home/bannersilder/BannerSlider";
import FooterSection from "@/components/layout/footer/Footer";
import IntroSection from "@/components/Home/introsection/IntroSection";
import VideoCouncellingSection from "@/components/Home/videocouncelligsection/VideoCouncellingSection";






export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
      >
       
        {/* ✅ Header show here */}
       <HeaderNavbar/>
       
<BannnerSliders/>
 <IntroSection/>
 <VideoCouncellingSection/>
     <FooterSection/>
    
      </body>
    </html>
  );
}