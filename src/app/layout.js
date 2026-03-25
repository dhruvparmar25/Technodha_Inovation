import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// SEO Metadata
export const metadata = {
  title: "Technodha",
  description: "Innovative Technology Solutions by Technodha",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="overflow-x-hidden antialiased bg-[#faf9f6]!">
        <Navbar />
        <main>{children}</main>
        <section data-theme="dark">
          <Footer />
        </section>
      </body>
    </html>
  );
}
