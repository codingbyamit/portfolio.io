import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";

const data = {
    name: "Amit",
    phone: "+91 9568705781",
    email: "codebyamit@gmail.com",
    title: "Full Stack Developer",
    summary:
        "Full Stack Developer with 2+ years building high-performance web applications and factory automation tools. Strong focus on backend automation, scalable APIs, real-time dashboards, and workflow optimization.",
    about:
        "I'm a results-driven Full Stack Developer currently working at ANU WORLES TECH PVT. LTD. I build scalable web applications and internal tools that automate manufacturing workflows and improve operational efficiency. " +
        "My strengths are designing clean backend architectures, integrating diverse data sources (MS Access, SQL, Google APIs), and delivering data-driven dashboards that help teams make faster decisions. " +
        "I enjoy solving real business problems with a mix of reliable backend services and simple, usable frontend interfaces.",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
        "Recharts",
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
    ],
    education: [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            school: "HLM College, CCS University",
            years: "2019-2022",
            percentage: "63.3%",
        },
        {
            degree: "Intermediate",
            school: "N.S.V. Inter College Surana, Ghaziabad",
            years: "2017-2018",
            percentage: "77%",
        },
        {
            degree: "High School",
            school: "N.S.V. Inter College Surana, Ghaziabad",
            years: "2016-2017",
            percentage: "63%",
        },
    ],
    experience: [
        {
            company: "ANU WORLES TECH PVT. LTD",
            role: "Full Stack Developer",
            from: "Feb 2024",
            highlights: [
                "Developed and maintained 8+ production applications automating manufacturing processes (improved internal efficiency by up to 40%).",
                "Integrated Node.js with MS Access and SQL for data-driven dashboards and reports.",
                "Built scalable RESTful APIs, optimized backend logic, and collaborated cross-functionally to deploy internal tools.",
            ],
        },
    ],
    projects: [
        {
            name: "Machine Breakdown Management System",
            tech: [
                "Node.js",
                "Express",
                "React",
                "SQL",
                "MS Access",
                "Tailwind CSS",
                "Google API",
                "NodeMailer",
            ],
            summary:
                "Centralized system to log, track, and analyze machine breakdowns across the factory. Allows operators to raise breakdown tickets with machine details, issue type, and timestamps, while supervisors monitor resolution status in real time.",
            impact: "Reduced machine downtime by ~35%; improved maintenance response time and provided clear historical breakdown analytics for preventive maintenance.",
        },
        {
            name: "Carbide Management System",
            tech: [
                "Node.js",
                "Express",
                "React",
                "SQL",
                "Google APIs",
                "Tailwind CSS",
            ],
            summary:
                "Automates carbide material planning and stock visibility in real time. Enables store teams to verify stock and process demands instantly.",
            impact: "Reduced material shortages & delays by ~60%; automated supplier-order emails for faster communication.",
        },
        {
            name: "Order Summary Dashboard",
            tech: [
                "Node.js",
                "Express",
                "React",
                "MS Access",
                "Recharts",
                "Tailwind CSS",
            ],
            summary:
                "Interactive dashboard showing customer-wise orders, delay UIDs, rejection analysis and YOY comparisons.",
            impact: "Improved management decision-making by ~70% through visualizations and drill-down reports.",
        },
        {
            name: "Work Entry System",
            tech: [
                "Node.js",
                "Express",
                "React",
                "SQL",
                "WebSockets",
                "Tailwind CSS",
            ],
            summary:
                "Real-time tracking system for job start/end times, with instant status updates and offline alerts.",
            impact: "Reduced idle time by ~40% and improved monitoring accuracy.",
        },
        {
            name: "Indent & Purchase Order Automation System",
            tech: [
                "Node.js",
                "Express",
                "React",
                "SQL",
                "Google APIs",
                "PDF Generation",
                "Tailwind CSS",
            ],
            summary:
                "Automates material indent creation and purchase order generation. Includes approval workflow, supplier selection, automatic PO number generation, PDF creation, and email dispatch to vendors.",
            impact: "Cut manual indent & PO processing time by ~60%; minimized human errors and standardized procurement workflows across departments.",
        },
        {
            name: "Pending Orders Dashboard",
            tech: [
                "Node.js",
                "Express",
                "React",
                "SQL",
                "Google Sheets API",
                "Tailwind CSS",
            ],
            summary:
                "Cloud-synced dashboard for pending orders with client-wise categorization and automated Google Sheets integration.",
            impact: "Cut manual paperwork by ~50% and sped up order tracking by ~60%.",
        },
    ],
    links: {
        github: "https://github.com/codingbyamit",
        linkedin: "https://www.linkedin.com/in/codingbyamit/",
        instagram: "https://www.instagram.com/codingbyamit/",
        portfolio: "", // optional
    },
};

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home resume={data} />} />
                <Route
                    path="/projects"
                    element={<Projects projects={data.projects} />}
                />
                <Route path="/about" element={<About resume={data} />} />
                <Route path="/contact" element={<Contact resume={data} />} />
                <Route
                    path="/skills"
                    element={<Skills skills={data.skills} />}
                />
            </Routes>
        </BrowserRouter>
    );
}
