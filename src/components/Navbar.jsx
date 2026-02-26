import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);

    const active = (path) =>
        pathname === path
            ? "text-white border-b-2 border-red-500 pb-1"
            : "text-gray-300 hover:text-white pb-1";

    const toggleMenu = () => setOpen(!open);

    return (
        <nav className="bg-[#06080f] fixed top-0 w-full z-50 shadow-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* LOGO */}
                <Link
                    to="/"
                    className="text-2xl text-red-500 font-extrabold tracking-wide"
                >
                    AMIT<span className="text-red-600 text-4xl">.</span>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-10 text-lg font-medium">
                    <Link to="/" className={active("/")}>
                        Home
                    </Link>
                    <Link to="/about" className={active("/about")}>
                        About
                    </Link>
                    <Link to="/skills" className={active("/skills")}>
                        Skills
                    </Link>
                    <Link to="/projects" className={active("/projects")}>
                        Projects
                    </Link>
                    <Link to="/contact" className={active("/contact")}>
                        Contact
                    </Link>
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white text-3xl focus:outline-none"
                >
                    {open ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            <div
                className={`md:hidden bg-[#06080f] border-t border-white/10 overflow-hidden transition-all duration-300 ${
                    open ? "max-h-60" : "max-h-0"
                }`}
            >
                <div className="flex flex-col px-6 py-4 gap-4 text-lg font-medium">
                    <Link
                        to="/"
                        className={`${active("/")} w-fit`}
                        onClick={() => setOpen(false)}
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className={`${active("/about")} w-fit`}
                        onClick={() => setOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/skills"
                        className={`${active("/skills")} w-fit`}
                        onClick={() => setOpen(false)}
                    >
                        Skills
                    </Link>

                    <Link
                        to="/projects"
                        className={`${active("/projects")} w-fit`}
                        onClick={() => setOpen(false)}
                    >
                        Projects
                    </Link>

                    <Link
                        to="/contact"
                        className={`${active("/contact")} w-fit`}
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
