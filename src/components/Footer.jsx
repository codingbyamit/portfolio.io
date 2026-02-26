export default function Footer() {
    return (
        <footer className="py-10 text-center border-t border-white/5 text-gray-600 text-sm">
            © {new Date().getFullYear()} {resume.name} | Built with React &
            Tailwind
        </footer>
    );
}
