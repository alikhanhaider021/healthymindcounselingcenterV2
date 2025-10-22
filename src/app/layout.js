
// import HeaderNavbar from "@/components/layout/header/Header";
// import "./globals.css";
// import FooterSection from "@/components/layout/footer/Footer";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
      
//        <HeaderNavbar/>

      
//         <main>{children}</main>

    
//         <FooterSection/>
//       </body>
//     </html>
//   );
// }
// app/layout.js  
  // title: "Healthy Mind Counselling Center",


// app/layout.js
import HeaderNavbar from "@/components/layout/header/Header";
import "./globals.css";
import FooterSection from "@/components/layout/footer/Footer";

export const metadata = {
 title: "Healthy Mind Counselling Center",
  description: "Your fitness journey starts here!",
  icons: {
    icon: " /favicon.ico.png ", // IMPORTANT: leading slash + file must be in public/
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* explicit fallback link in <head> helps when some browsers cache */}
        <link rel="icon" href="/favicon.ico.png" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-100x100.png" sizes="100x100" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <HeaderNavbar />
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}

