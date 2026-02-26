import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { skillIconMap, fallbackSkill } from "../utils/skillIconMap";

export default function Skills({ skills }) {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    // Manufacturing/Enterprise projects ke liye skills ko categories mein dikhana better hota hai
    const categories = {
        "Frontend Development": [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Tailwind CSS",
            "Recharts",
        ],
        "Backend & Database": ["Node.js", "Express", "MongoDB", "SQL"],
        "DevOps & Tools": ["Git", "GitHub", "Postman", "VS Code"],
    };

    return (
        <section className="py-24 bg-[#05080f] text-white relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-20">
                <div className="mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Technical <span className="text-red-500">Skills</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl text-lg">
                        A specialized tech stack optimized for building
                        high-performance automation tools and scalable web
                        systems.
                    </p>
                </div>

                <div className="space-y-16">
                    {Object.entries(categories).map(
                        ([categoryName, skillList], categoryIdx) => (
                            <div key={categoryIdx} data-aos="fade-up">
                                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-8 flex items-center gap-4">
                                    {categoryName}{" "}
                                    <div className="h-[1px] flex-1 bg-white/5"></div>
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                    {skillList.map((skillName, i) => {
                                        // Sirf wo skills dikhaye jo aapke 'data.js' mein exist karti hain
                                        if (!skills.includes(skillName))
                                            return null;

                                        const mapped =
                                            skillIconMap[skillName] ||
                                            fallbackSkill;
                                        const Icon = mapped.icon;
                                        const color = mapped.color;

                                        return (
                                            <div
                                                key={i}
                                                className="
                                                group relative p-6 rounded-2xl border border-white/5 
                                                bg-gradient-to-b from-white/[0.03] to-transparent
                                                hover:border-red-500/40 transition-all duration-500
                                                flex flex-col items-center justify-center gap-4
                                                hover:-translate-y-2
                                            "
                                            >
                                                {/* Skill Icon */}
                                                <div
                                                    className="text-4xl transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                                    style={{ color: color }}
                                                >
                                                    <Icon />
                                                </div>

                                                {/* Skill Name */}
                                                <span className="text-xs font-bold tracking-wider text-gray-400 group-hover:text-white transition-colors">
                                                    {skillName}
                                                </span>

                                                {/* Hover Glow Effect */}
                                                <div
                                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                                                    style={{
                                                        backgroundColor: color,
                                                        filter: "blur(20px)",
                                                    }}
                                                ></div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
