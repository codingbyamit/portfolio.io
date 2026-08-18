import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import SocialBar from "../components/SocialBar";
import profile_new from "../assets/profile_new.png";
import "aos/dist/aos.css";

export default function Home({ resume }) {
    return (
        <div className="bg-[#05080f] text-white overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center pt-20 md:pt-28 sm:pt-32 lg:pt-16">
                {/* Social Bar only visible in hero */}
                <div className="absolute left-8 top-1/3 z-40 hidden md:block">
                    <SocialBar links={resume.links} />
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

            {/* QUICK LINKS — full detail lives on dedicated pages, not duplicated here */}
            <section className="pb-24 pt-4 relative z-10">
                <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-3 gap-6">
                    {[
                        {
                            to: "/skills",
                            title: "Technical Skills",
                            desc: "Frontend, backend, database & tooling stack.",
                        },
                        {
                            to: "/projects",
                            title: "Projects",
                            desc: "Production systems built end-to-end.",
                        },
                        {
                            to: "/about",
                            title: "Experience & Education",
                            desc: "Work history and academic background.",
                        },
                    ].map((card) => (
                        <Link
                            key={card.to}
                            to={card.to}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-gray-400 text-sm mt-2">
                                {card.desc}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
