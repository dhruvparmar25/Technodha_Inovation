"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
    const pathname = usePathname();
    const pathnames = pathname.split("/").filter(Boolean);

    return (
        <nav className="mt-2">
            <ol className="flex items-center flex-wrap text-sm">
                <li>
                    <Link
                        href="/"
                        className="font-[Poppins] font-medium text-[16px] text-white hover:opacity-80"
                    >
                        Home
                    </Link>
                </li>

                {pathnames.map((path, index) => {
                    const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={routeTo} className="flex items-center">
                            <span className="mx-2 text-white">/</span>

                            {isLast ? (
                                <span
                                    className="
                                        font-[Poppins]
                                        font-medium
                                        text-[16px]
                                        leading-[100%]
                                        text-gradient-primary
                                        capitalize
                                    "
                                >
                                    {path.replace("-", " ")}
                                </span>
                            ) : (
                                <Link
                                    href={routeTo}
                                    className="
                                        font-[Poppins]
                                        font-medium
                                        text-[16px]
                                        text-white
                                        hover:opacity-80
                                        capitalize
                                    "
                                >
                                    {path.replace("-", " ")}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
