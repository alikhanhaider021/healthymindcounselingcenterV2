
import HeaderNavbar from "@/components/layout/header/Header";
import "./globals.css";

import Home from "./page";
import BannnerSliders from "@/components/Home/bannersilder/BannerSlider";
import FooterSection from "@/components/layout/footer/Footer";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
      >
        {/* ✅ Header show here */}
       <HeaderNavbar/>
       
<BannnerSliders/>
     <FooterSection/>
      </body>
    </html>
  );
}
