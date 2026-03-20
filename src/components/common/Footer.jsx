"use client";

import Link from "next/link";
import Image from "next/image";
import { FaRegMessage } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import FooterLogo from "@/assets/images/common/footer-logo.png";

const companyLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services",  path: "/services/web-development" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Career", path: "/career" },
];

const serviceLinks = [
    { id: 1, name: "Web Development", path: "/services/web-development" },
    { id: 2, name: "Mobile App Development", path: "/services/mobile-apps" },
    { id: 3, name: "UI / UX Design", path: "/services/ui-ux" },
    { id: 4, name: "Cloud Computing", path: "/services/cloud-services" },
];

const FooterHeading = ({ children }) => (
    <h4 className="relative text-white text-[14px] mb-4 pb-2 inline-">
        {children}
        <span className="absolute left-0 bottom-0 h-px w-8.25 bg-(--light-color-secondary)"></span>
    </h4>
);

const Footer = () => {
    return (
        <footer className="bg-bg text-text-secondary text-[13px]">
            {/* Top Section */}
            <div className=" max-w-[1230px] px-[15px] m-auto py-15 grid gap-12 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {/* Logo */}
                <div>
                       <Link href="/">
                    <Image
                        src={FooterLogo}
                        alt="Technodha logo"
                        className="w-25.25 h-26.75"
                        loading="lazy"
                    /></Link>
                </div>

                {/* Company */}
                <nav aria-label="Company links">
                    <FooterHeading>Company</FooterHeading>
                    <ul className="space-y-2.5">
                        {companyLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={link.path}
                                    className=" transition-colors duration-200 hover:text-(--light-color-secondary)"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Services */}
                <nav aria-label="Service links">
                    <FooterHeading>Services</FooterHeading>
                    <ul className="space-y-2.5">
                        {serviceLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={link.path}
                                    className=" transition-colors duration-200 hover:text-(--light-color-secondary)"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Office */}
                <address className="not-italic">
                    <FooterHeading>Office</FooterHeading>

                    <p className="mb-4">
                        B-1006, B Wing, Sonorous,
                        <br />
                        Opp. Circuit House, Silvassa Koparli Road,
                        <br />
                        Vapi – 396195
                    </p>

                    <p className="mb-3">
                        <a
                            href="mailto:support@technodha.com"
                            className="
        flex items-center gap-2
        hover:text-(--light-color-secondary)
        transition-colors
        break-all
        sm:break-normal
    "
                        >

                            <FaRegMessage
                                size={16}
                                className="text-(--light-color-secondary)"
                            />
                            support@technodha.com
                        </a>
                    </p>

                    <p>
                        <a
                            href="tel:+919297626262"
                            className="flex items-center gap-2 hover:text-(--light-color-secondary) transition-colors"
                        >
                            <IoCallOutline
                                size={16}
                                className="text-(--light-color-secondary)"
                            />
                            +91 9297626262
                        </a>
                    </p>
                </address>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#2A2A33]">
                <div className="px-6 xl:px-30 py-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-[12px] text-white">
                    <p>© 2026 Technodha. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
