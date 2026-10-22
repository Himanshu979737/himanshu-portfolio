import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";
import defaultData from "../public/portfolio.json";

function App() {
  // Initialize directly with defaultData so the student profile displays instantly
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Determine JSON path relative to Vite's base URL for both local and GitHub Pages deployment
    const baseUrl = import.meta.env.BASE_URL || "./";
    const primaryPath = `${baseUrl.endsWith("/") ? baseUrl : baseUrl + "/"}portfolio.json`;

    fetch(primaryPath)
      .then((res) => {
        if (!res.ok) {
          // Fallback to relative ./portfolio.json
          return fetch("./portfolio.json");
        }
        return res;
      })
      .then((res) => {
        if (!res.ok) {
          // Fallback to /portfolio.json
          return fetch("/portfolio.json");
        }
        return res;
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load portfolio data (${res.status})`);
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Unable to fetch external portfolio.json, using bundled data fallback:", err);
        if (defaultData) {
          setData(defaultData);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      });
  }, []);

  if (loading && !data) {
    return <p className="status">Loading Portfolio...</p>;
  }

  if (error && !data) {
    return <p className="status">Unable to load portfolio data.</p>;
  }

  return (
    <>
      <Navbar name={data?.name} />
      <main>
        <Hero data={data} />
        <About data={data} />
        <Skills skills={data?.skills} />
        <Projects projects={data?.projects} />
        <Education education={data?.education} />
        <Contact email={data?.email} socials={data?.socials} />
      </main>
      <Footer name={data?.name} socials={data?.socials} />
    </>
  );
}

export default App;
