import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SocialBar() {
    const [links, setLinks] = useState(null);

    useEffect(() => {
        axiosClient.get("/resume").then(({ data }) => {
            setLinks(data.links || {});
        });

        AOS.init({ duration: 900, once: true });
    }, []);

    if (!links) return null;

    return (
        <div
            className="
                hidden md:flex flex-col gap-6 text-xl text-white 
                absolute left-6 top-1/3 z-40
            "
            data-aos="fade-right"
        >
            {/* Facebook */}
            {links.facebook && (
                <a
                    className="hover:text-red-600 hover:scale-125"
                    href={links.facebook}
                    target="_blank"
                >
                    <FaFacebookF />
                </a>
            )}

            {/* Twitter */}
            {links.twitter && (
                <a
                    className="hover:text-red-600 hover:scale-125"
                    href={links.twitter}
                    target="_blank"
                >
                    <FaTwitter />
                </a>
            )}

            {/* Instagram */}
            {links.instagram && (
                <a
                    className="hover:text-red-600 hover:scale-125"
                    href={links.instagram}
                    target="_blank"
                >
                    <FaInstagram />
                </a>
            )}

            {/* LinkedIn */}
            {links.linkedin && (
                <a
                    className="hover:text-red-600 hover:scale-125"
                    href={links.linkedin}
                    target="_blank"
                >
                    <FaLinkedinIn />
                </a>
            )}

            {/* GitHub */}
            {links.github && (
                <a
                    className="hover:text-red-600 hover:scale-125"
                    href={links.github}
                    target="_blank"
                >
                    <FaGithub />
                </a>
            )}
        </div>
    );
}
