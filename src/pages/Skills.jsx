import React, { useState, useEffect } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: 75, icon: "💎" },
      { name: "C++", level: 70, icon: "💻" },
      { name: "TypeScript", level: 60, icon: "🔷" },
      { name: "JavaScript", level: 90, icon: "⚡" },
      { name: "Python", level: 80, icon: "🐍" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 85, icon: "⚛️" },
      { name: "HTML / CSS", level: 95, icon: "🌐/🎨" },
      { name: "Tailwind", level: 80, icon: "💨" },
      { name: "MERN Stack", level: 82, icon: "📚" },
      { name: "Next Js / Django", level: 75, icon: "📚/🐍" },
    ],
  },
  {
    title: "Database & Backend",
    skills: [
      { name: "SQL", level: 75, icon: "🗄️" },
      { name: "MySQL", level: 72, icon: "🐬" },
      { name: "PostgreSQL", level: 70, icon: "🐬" },
      { name: "MongoDB", level: 74, icon: "🍃" },
      { name: "Node.js", level: 80, icon: "🟢" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 80, icon: "📋" },
      { name: "GitHub", level: 85, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Jira", level: 80, icon: "📊" },
      { name: "Docker", level: 75, icon: "🐳" }, 
    ],
  },
  {
    title: "Computer Science",
    skills: [
      { name: "Data Structures", level: 85, icon: "🏗️" },
      { name: "Algorithms", level: 90, icon: "🧠" },
      { name: "System Design", level: 78, icon: "📐" },
      { name: "Databases", level: 80, icon: "🗄️" },
      { name: "Software Engineering", level: 77, icon: "💻" }
    ],
  },
];

const Skills = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const cardBg = isDark
    ? "bg-blue-950/50 border-blue-900/40"
    : "bg-blue-50 border-blue-200";
  const accentBg = isDark ? "bg-blue-900/30" : "bg-blue-100/50";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const SkillBar = ({ skill, delay }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }, [skill.level, delay]);

    return (
      <div className="mb-4 group">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{skill.icon}</span>
            <span
              className={`font-semibold ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {skill.name}
            </span>
          </div>
          <span
            className={`text-sm font-medium ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {skill.level}%
          </span>
        </div>
        <div
          className={`w-full rounded-full h-2.5 overflow-hidden ${
            isDark ? "bg-blue-900/30" : "bg-blue-200"
          }`}
        >
          <div
            className="h-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedLevel}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${containerBg} min-h-screen transition-colors duration-300 px-4 sm:px-6 lg:px-8 py-16 md:py-24`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent [text-fill-color:transparent] mb-4 leading-snug overflow-visible pb-1 pt-4">
            My Skills
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg md:text-xl ${textPrimary} max-w-3xl mx-auto`}>
            A comprehensive overview of my technical expertise across various areas of software development, including full-stack development, AI/ML, and data-driven solutions, as well as my experience working as a Project Manager.
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 opacity-0 animate-fade-in`}
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <div
            className={`text-center ${cardBg} rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-2`}
          >
            <div className={`text-3xl font-bold ${textSecondary} mb-2`}>
              7+
            </div>
            <div className={`text-sm font-medium ${textPrimary}`}>
              Technologies
            </div>
          </div>
          <div
            className={`text-center ${cardBg} rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-2`}
          >
            <div className={`text-3xl font-bold ${textSecondary} mb-2`}>5</div>
            <div className={`text-sm font-medium ${textPrimary}`}>
              Categories
            </div>
          </div>
          <div
            className={`text-center ${cardBg} rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-2`}
          >
            <div className={`text-3xl font-bold ${textSecondary} mb-2`}>2+</div>
            <div className={`text-sm font-medium ${textPrimary}`}>
              Years Learning
            </div>
          </div>
          <div
            className={`text-center ${cardBg} rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-2`}
          >
            <div className={`text-3xl font-bold ${textSecondary} mb-2`}>∞</div>
            <div className={`text-sm font-medium ${textPrimary}`}>Passion</div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {categories.map((category, idx) => (
            <div
              key={category.title}
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ animationDelay: `${0.6 + idx * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`${cardBg} rounded-2xl border-2 p-8 transition-all duration-300 ${
                  hoveredCard === idx
                    ? isDark
                      ? "border-blue-600 shadow-lg shadow-blue-900/20"
                      : "border-blue-400 shadow-lg shadow-blue-200"
                    : ""
                }`}
              >
                <h2 className={`text-2xl font-bold mb-6 ${textSecondary}`}>
                  {category.title}
                </h2>

                <div className="space-y-1">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={600 + idx * 150 + skillIdx * 100}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 opacity-0 animate-fade-in rounded-2xl p-8 md:p-12 ${
            isDark
              ? "bg-blue-950/50 border-2 border-blue-900/40"
              : "bg-blue-100/50 border-2 border-blue-200"
          }`}
          style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
        >
          <h2
            className={`text-4xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Continuous Learning
          </h2>
          <p className={`text-lg mb-8 ${textPrimary}`}>
            Technology evolves at an incredible pace, and I thrive on keeping up.
            I’m passionate about exploring emerging technologies, mastering new frameworks,
            and continuously enhancing my skills in full-stack development, AI/ML, and Data Science.
            Every project I tackle fuels my curiosity and pushes me to grow as a developer and problem-solver.
            My journey in tech is just beginning, and
            I’m excited to turn challenges into opportunities for innovation.
          </p>
          <div className="flex gap-4 flex-wrap">
            <div
              className={`${accentBg} border-2 ${
                isDark ? "border-blue-800" : "border-blue-300"
              } px-6 py-3 rounded-full text-sm font-semibold ${textPrimary}`}
            >
              🎯 Currently Learning: Data Science
            </div>
            <div
              className={`${accentBg} border-2 ${
                isDark ? "border-blue-800" : "border-blue-300"
              } px-6 py-3 rounded-full text-sm font-semibold ${textPrimary}`}
            >
              🚀 Next Goal: Cloud Computing & Scalable Architectures
            </div>
            <div
              className={`${accentBg} border-2 ${
                isDark ? "border-blue-800" : "border-blue-300"
              } px-6 py-3 rounded-full text-sm font-semibold ${textPrimary}`}
            >
              💡 Exploring: AI/ML, Advanced Algorithms, and Intelligent Systems
            </div>
          </div>
        </div>
        <div
          className={`text-center mt-16 opacity-0 animate-fade-in`}
          style={{ animationDelay: "2.1s", animationFillMode: "forwards" }}
        >
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/work">
              <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                View My Projects
              </button>
            </Link>

            <Link to="/connect">
              <button
                className={`${
                  isDark
                    ? "border-2 border-blue-400 text-blue-400 hover:bg-blue-950"
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                } px-8 py-4 cursor-pointer rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1`}
              >
                Let's Collaborate
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Skills;
