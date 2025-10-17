
import HeaderNavbar from "@/components/layout/header/Header";
import "./globals.css";
import FooterSection from "@/components/layout/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header always visible */}
       <HeaderNavbar/>

        {/* Page content will render here */}
        <main>{children}</main>

        {/* Optional: a footer common to all pages */}
        <FooterSection/>
      </body>
    </html>
  );
}
