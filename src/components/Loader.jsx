export default function Loader() {
    return (
        <div className="w-full h-screen bg-[#05080f] flex flex-col items-center justify-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.06] bg-[url('/pattern.svg')]"></div>

            {/* Animated Circular Border */}
            <div className="relative">
                <div className="w-40 h-40 rounded-full border-[6px] border-white/10 animate-spin-slow border-t-red-600 shadow-xl"></div>

                {/* Inner Circle */}
                <div className="absolute inset-4 rounded-full bg-[#05080f] border border-white/10"></div>

                {/* Glow Dot */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
            </div>

            {/* Loading Text */}
            <h1 className="mt-8 text-2xl font-bold tracking-wider flex items-center gap-2">
                Loading
                <span className="flex gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
                </span>
            </h1>
        </div>
    );
}
