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
<body suppressHydrationWarning className="overflow-x-hidden antialiased">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
