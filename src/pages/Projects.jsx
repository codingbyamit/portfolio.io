import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FiX,
    FiActivity,
    FiSettings,
    FiShield,
    FiDatabase,
} from "react-icons/fi";

export default function Projects({ projects }) {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    const closePopup = () => setSelectedProject(null);

    return (
        <section className="bg-[#05080f] text-white pt-32 pb-20 px-6 relative">
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#ef4444_0%,transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto relative z-20">
                <div className="mb-12">
                    <h1
                        className="text-4xl md:text-5xl font-extrabold tracking-tight"
                        data-aos="fade-up"
                    >
                        <span className="">Projects</span>
                    </h1>
                    <p
                        className="text-gray-400 mt-4 text-lg max-w-2xl"
                        data-aos="fade-up"
                    >
                        Enterprise-grade applications built to solve complex
                        manufacturing workflows and automate data management.
                    </p>
                </div>

                {/* PROJECT GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
                    {projects?.map((p, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <ProjectCard
                                project={p}
                                onOpen={setSelectedProject}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ENHANCED MODAL FOR ENTERPRISE PROJECTS */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-[100] p-4 animate-fadein">
                    <div className="w-full max-w-3xl bg-[#0d1117] rounded-3xl border border-white/10 shadow-2xl relative animate-popup overflow-hidden">
                        {/* Status Header */}
                        <div className="bg-gradient-to-r from-red-600/20 to-transparent p-6 border-b border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-red-500 font-bold uppercase text-[10px] tracking-widest">
                                <FiShield /> Internal Company Software
                            </div>
                            <button
                                onClick={closePopup}
                                className="text-gray-400 hover:text-white transition"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        <div className="p-8 md:p-10">
                            <h2 className="text-3xl font-bold mb-4">
                                {selectedProject.name}
                            </h2>

                            {/* Tech Stack Chips */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {selectedProject.tech?.map((t, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Summary Column */}
                                <div>
                                    <h3 className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                                        <FiSettings className="text-red-500" />{" "}
                                        System Overview
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {selectedProject.summary}
                                    </p>
                                </div>

                                {/* Impact Column */}
                                <div>
                                    <h3 className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                                        <FiActivity className="text-green-500" />{" "}
                                        Business Impact
                                    </h3>
                                    <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                                        <p className="text-green-100 text-sm font-medium italic leading-relaxed">
                                            "{selectedProject.impact}"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Database/API Badge - Professional Touch */}
                            {/* <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-gray-500">
                                    <FiDatabase />
                                    <span className="text-xs">
                                        Secure SQL/Enterprise Database
                                        Integration
                                    </span>
                                </div>
                                <span className="text-[10px] text-gray-600 font-bold uppercase">
                                    Codebase: Restricted
                                </span>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .animate-fadein { animation: fadein 0.2s ease-out; }
                @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
                .animate-popup { animation: popup 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
                @keyframes popup { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
            `}</style>
        </section>
    );
}
