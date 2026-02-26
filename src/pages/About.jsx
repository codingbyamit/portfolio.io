import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaGraduationCap, FaQuoteLeft } from "react-icons/fa";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import Experience from "./Experience";

export default function About({ resume }) {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <div className="bg-[#05080f] text-white pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-40 -left-20 w-80 h-80 bg-red-600/10 blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-20">
                {/* SECTION TITLE */}
                <div className="flex flex-col mb-12" data-aos="fade-right">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight flex items-center gap-4">
                        <span className="p-3 bg-red-500/10 rounded-2xl border border-red-500/20">
                            <FaUser className="text-red-500 text-3xl" />
                        </span>
                        About Me
                    </h1>
                    <div className="h-1 w-20 bg-red-500 mt-4 rounded-full"></div>
                </div>

                {/* SUMMARY CARD WITH QUOTE STYLE */}
                <div
                    className="
                        relative p-10 bg-gradient-to-br from-white/5 to-transparent border border-white/10 
                        rounded-3xl shadow-2xl backdrop-blur-xl group hover:border-red-500/30 
                        transition-all duration-500 mb-24
                    "
                    data-aos="fade-up"
                >
                    <FaQuoteLeft className="absolute top-6 left-6 text-red-500/20 text-5xl group-hover:text-red-500/40 transition-colors" />
                    <p className="text-gray-300 text-xl leading-relaxed italic relative z-10">
                        {resume.summary}
                    </p>
                </div>

                {/* EXPERIENCE SECTION */}
                <div className="mb-24">
                    <Experience experience={resume.experience} />
                </div>

                {/* EDUCATION SECTION */}
                <div className="relative">
                    <h2
                        className="text-3xl font-bold mb-10 tracking-tight flex items-center gap-3"
                        data-aos="fade-up"
                    >
                        <span className="p-2 bg-white/5 rounded-lg border border-white/10">
                            <FaGraduationCap className="text-red-500" />
                        </span>
                        Academic Background
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {resume.education.map((ed, i) => (
                            <div
                                key={i}
                                className="
                                    group p-8 rounded-2xl bg-[#0d1117] border border-white/5 shadow-xl 
                                    hover:border-red-500/40 hover:shadow-red-500/10
                                    transition-all duration-500 hover:-translate-y-2 relative overflow-hidden
                                "
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                            >
                                {/* Year Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold mb-4 border border-red-500/20">
                                    <FiCalendar /> {ed.years}
                                </div>

                                <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                                    {ed.degree}
                                </h3>

                                <div className="flex items-center gap-2 text-gray-400 mt-2 text-sm font-medium">
                                    <FiMapPin className="text-red-500/60" />
                                    {ed.school}
                                </div>

                                {ed.percentage && (
                                    <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                                        <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                                            Academic Performance
                                        </span>
                                        <span className="text-lg font-black text-white bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                                            {ed.percentage}
                                        </span>
                                    </div>
                                )}

                                {/* Decorative Background Icon */}
                                <FaGraduationCap className="absolute -bottom-4 -right-4 text-white/[0.02] text-8xl group-hover:text-red-500/[0.05] transition-all" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
