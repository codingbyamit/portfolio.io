export default function Footer({ name }) {
    return (
        <footer className="py-10 text-center border-t border-white/5 text-gray-600 text-sm bg-[#05080f]">
            © {new Date().getFullYear()} {name} | Built with React & Tailwind
        </footer>
    );
}
