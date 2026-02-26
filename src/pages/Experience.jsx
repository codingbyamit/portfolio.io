import { FiBriefcase, FiCalendar, FiCheckCircle } from "react-icons/fi";

export default function Experience({ experience }) {
    return (
        <div className="mt-20">
            {/* Section Header */}
            <h2
                className="text-3xl font-bold mb-10 tracking-tight flex items-center gap-3"
                data-aos="fade-up"
            >
                <span className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <FiBriefcase className="text-red-500" />
                </span>
                Professional Experience
            </h2>

            <div className="space-y-12">
                {experience.map((exp, index) => (
                    <div
                        key={index}
                        className="relative pl-8 border-l-2 border-white/10 group pb-4"
                        data-aos="fade-up"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#05080f] border-2 border-red-500 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>

                        {/* Experience Content Card */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-red-500/30 hover:bg-white/[0.07] transition-all duration-500">
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <p className="text-red-500 font-semibold mt-1 text-lg">
                                        {exp.company}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium">
                                    <FiCalendar className="text-red-500" />
                                    {exp.from} — Present
                                </div>
                            </div>

                            {/* Highlights List */}
                            <ul className="space-y-4">
                                {exp.highlights.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-gray-300 leading-relaxed"
                                    >
                                        <FiCheckCircle
                                            className="text-red-500 mt-1.5 shrink-0"
                                            size={16}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Quick Stats Badge (Based on your data) */}
                            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4">
                                <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-xs font-bold uppercase tracking-wider">
                                    40% Efficiency Boost
                                </div>
                                <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-bold uppercase tracking-wider">
                                    8+ Production Apps
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
