import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FiMail,
    FiPhone,
    FiGithub,
    FiLinkedin,
    FiSend,
    FiMapPin,
} from "react-icons/fi";

export default function Contact({ resume }) {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <section className="bg-[#05080f] text-white pt-32 pb-20 px-6 relative overflow-hidden">
            {/* background glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/5 blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT SIDE: INFO */}
                    <div data-aos="fade-right">
                        <h1 className="text-5xl font-extrabold tracking-tight">
                            Get In <span className="text-red-500">Touch</span>
                        </h1>
                        <p className="text-gray-400 mt-4 text-lg max-w-md">
                            I'm always open to discussing automation projects,
                            full-stack opportunities, or just to have a chat.
                        </p>

                        <div className="mt-10 space-y-6">
                            {/* Contact Detail Cards */}
                            <a
                                href={`mailto:${resume.email}`}
                                className="flex items-center gap-5 group"
                            >
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-all duration-300">
                                    <FiMail className="text-red-500 text-xl" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                                        Email Me
                                    </p>
                                    <p className="text-gray-200 font-medium">
                                        {resume.email}
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-center gap-5 group">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-all duration-300">
                                    <FiPhone className="text-red-500 text-xl" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                                        Call Me
                                    </p>
                                    <p className="text-gray-200 font-medium">
                                        {resume.phone}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 group">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-all duration-300">
                                    <FiMapPin className="text-red-500 text-xl" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                                        Location
                                    </p>
                                    <p className="text-gray-200 font-medium">
                                        Ghaziabad / Delhi NCR, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-12 flex gap-4">
                            {[
                                {
                                    icon: <FiGithub />,
                                    link: resume.links.github,
                                },
                                {
                                    icon: <FiLinkedin />,
                                    link: resume.links.linkedin,
                                },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-red-500 transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: FORM */}
                    <div
                        className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl"
                        data-aos="fade-left"
                    >
                        <form className="grid gap-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">
                                        Name
                                    </label>
                                    <input
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                                        placeholder="Enter Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                                        placeholder="Enter Email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                                    placeholder="Enter Message"
                                ></textarea>
                            </div>

                            <button className="mt-2 group flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-600/20">
                                Send Message{" "}
                                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
