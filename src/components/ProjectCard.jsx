import { FiLock, FiBarChart2, FiArrowRight, FiLayers } from "react-icons/fi";

export default function ProjectCard({ project, onOpen }) {
    return (
        <div
            onClick={() => onOpen(project)}
            className="
                group relative p-8 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#05080f] 
                border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 
                hover:-translate-y-3 hover:border-red-500/40 hover:shadow-red-500/10
                overflow-hidden cursor-pointer flex flex-col justify-between h-full
            "
        >
            {/* Background Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-500/5 blur-[80px] group-hover:bg-red-500/20 transition-all duration-700"></div>

            <div className="relative z-10">
                {/* Status Badge & Icon */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        <FiLock className="text-red-500" /> Proprietary Tool
                    </div>
                    {project.name.includes("Indent") ? (
                        <a href="http://139.5.196.37:5022">
                            <FiBarChart2
                                className="text-gray-600 group-hover:text-red-400 transition-colors"
                                size={24}
                            />
                        </a>
                    ) : (
                        <FiLayers
                            className="text-gray-600 group-hover:text-red-400 transition-colors"
                            size={24}
                        />
                    )}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {project.name}
                </h3>

                {/* Summary */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                </p>

                {/* RECRUITER SPECIAL: IMPACT SECTION */}
                <div className="relative p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-transparent border-l-2 border-red-500 mb-6">
                    <div className="flex items-center gap-2 mb-1">
                        <FiBarChart2 className="text-red-500" size={14} />
                        <span className="text-[10px] uppercase tracking-widest font-black text-red-500">
                            Measurable Impact
                        </span>
                    </div>
                    <p className="text-red-50 text-[13px] font-medium italic">
                        {project.impact}
                    </p>
                </div>
            </div>

            {/* Tech Stack & Footer */}
            <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech?.map((t, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 text-[10px] font-bold text-gray-300 bg-white/5 border border-white/10 rounded group-hover:border-red-500/30 transition-colors"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500 group-hover:text-white transition-all flex items-center gap-2">
                        View Architecture{" "}
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] text-gray-600 italic">
                        Code Confidential
                    </span>
                </div> */}
            </div>
        </div>
    );
}
