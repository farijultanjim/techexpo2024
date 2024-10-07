import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "International TechExpo 2024",
  description: "International TechExpo 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
