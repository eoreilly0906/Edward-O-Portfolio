import { Route, Routes, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Edward O'Reilly</h1>
      <nav>
        <ul className="flex space-x-4">
          {[
            { name: "About Me", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Contact", path: "/contact" },
            { name: "Resume", path: "/resume" },
          ].map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `p-2 ${isActive ? "text-yellow-400" : "text-white"}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 flex justify-center space-x-4">
      <a href="#" className="text-xl">
        <FaGithub />
      </a>
      <a href="#" className="text-xl">
        <FaLinkedin />
      </a>
      <a href="#" className="text-xl">
        <FaStackOverflow />
      </a>
    </footer>
  );
} 