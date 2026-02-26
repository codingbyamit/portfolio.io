import { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";
import Typewriter from "typewriter-effect";
import SocialBar from "../components/SocialBar";
import AOS from "aos";
import profile from "../assets/profile.png";
import profile_new from "../assets/profile_new.png";
import "aos/dist/aos.css";
// import Loader from "../components/Loader";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
// import Contact from "./Contact";
// import Experience from "./Experience";

export default function Home({ resume }) {
    return (
        <div className="bg-[#05080f] text-white overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-evenly pt-20 md:pt-28 sm:pt-32 lg:pt-16">
                {/* Social Bar only visible in hero */}
                <div className="absolute left-8 top-1/3 z-40 hidden md:block">
                    <SocialBar />
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-2 relative w-full">
                    {/* IMAGE */}
                    <div className=" flex justify-center" data-aos="fade-right">
                        <div className="w-[330px] h-[330px] ">
                            <img
                                src={profile_new}
                                alt="profile"
                                className="  grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                            />
                        </div>
                    </div>

                    {/* TEXT */}
                    <div
                        className="flex flex-col center  pt-20 sm:items-center md:items-start "
                        data-aos="fade-left"
                    >
                        <h1 className="text-6xl md:text-7xl font-extrabold flex gap-2 text-red-600 uppercase">
                            {resume.name}
                        </h1>

                        <h2 className="mt-3 text-3xl md:text-4xl tracking-[10px] text-gray-200 center-text font-bold">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Backend Developer",
                                        "Full Stack Developer",
                                        "Frontend Developer",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 70,
                                    deleteSpeed: 40,
                                }}
                            />
                        </h2>

                        <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl center-text">
                            {resume.summary}
                        </p>

                        <div className="mt-8 flex gap-4">
                            <a
                                href="/Amit_Full_Stack_Developer.pdf"
                                download
                                className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200"
                            >
                                Download CV
                            </a>

                            <a
                                href={`mailto:${resume.email}`}
                                className="px-6 py-3 border border-white rounded-lg hover:bg-white/10"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>

                {/* scroll down indicator */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce down">
                    Scroll Down ↓
                </div>
            </section>

            {/* {ABOUT SECTION } */}
            {/* <About /> */}

            {/* SKILLS SECTION */}
            <Skills skills={resume.skills} />

            {/* PROJECTS SECTION */}
            <Projects projects={resume.projects} />

            <About resume={resume} />

            {/* EXPERIENCE SECTION */}
            {/* <section className="pt-10 pb-20 relative z-10" data-aos="fade-up">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-extrabold mb-6">Experience</h2>

                    <div className="space-y-8">
                        {resume.experience.map((e, i) => (
                            <div
                                key={i}
                                className="p-6 bg-white/5 border border-white/10 rounded-xl shadow-lg"
                            >
                                <h3 className="text-xl font-semibold">
                                    {e.company}
                                </h3>
                                <p className="text-gray-400">{e.role}</p>
                                <ul className="mt-4 ml-6 text-gray-400 list-disc text-sm">
                                    {e.highlights.map((h, idx) => (
                                        <li key={idx}>{h}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    );
}
