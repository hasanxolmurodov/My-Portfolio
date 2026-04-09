import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { Send } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <footer
      className={`${
        isDark ? "bg-black border-blue-900/40" : "bg-white border-blue-100"
      } border-t transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h3
            className={`text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent`}
          >
            Hasan Xolmurodov
          </h3>

          <div className="flex items-center gap-3">
            <a
              href="https://t.me/Xolmurodov_H"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDark
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-blue-400 hover:bg-blue-500 text-white"
              } p-2 rounded-full transition-colors duration-300 flex items-center justify-center`}
              title="Telegram - Hasan Xolmurodov"
            >
              <Send size={20} />
            </a>
          </div>

          <p
            className={`${isDark ? "text-gray-500" : "text-gray-600"} text-sm`}
          >
            © 2026 Hasan Xolmurodov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
