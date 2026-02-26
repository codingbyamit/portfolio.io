import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";
import {
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiMysql,
    SiGit,
    SiGithub,
    SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skillIconMap = {
    HTML: {
        icon: FaHtml5,
        color: "#E34F26",
    },
    CSS: {
        icon: FaCss3Alt,
        color: "#1572B6",
    },

    JavaScript: {
        icon: SiJavascript,
        color: "#F7DF1E",
    },

    "React.js": {
        icon: FaReact,
        color: "#61DBFB",
    },

    "Node.js": {
        icon: FaNodeJs,
        color: "#3C873A",
    },

    Express: {
        icon: SiExpress,
        color: "#FFFFFF",
    },

    MongoDB: {
        icon: SiMongodb,
        color: "#4DB33D",
    },

    "Tailwind CSS": {
        icon: SiTailwindcss,
        color: "#38BDF8",
    },

    TypeScript: {
        icon: SiTypescript,
        color: "#3178C6",
    },

    SQL: {
        icon: SiMysql,
        color: "#F29111",
    },

    Git: {
        icon: FaGitAlt,
        color: "#F05033",
    },

    GitHub: {
        icon: SiGithub,
        color: "#FFAB00",
    },

    "VS Code": {
        icon: VscVscode,
        color: "#007ACC",
    },
    Postman: {
        icon: SiPostman,
        color: "#FF6C37",
    },
};

// fallback icon when skill not found
import { FiBox } from "react-icons/fi";
export const fallbackSkill = {
    icon: FiBox,
    color: "#AAA",
};
