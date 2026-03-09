import Image from "next/image";
import Slideshow from "./components/Slideshow";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-[#f9f8f5] font-sans dark:bg-black">
      <div className="flex h-full w-full">
        {/* ================= LEFT PANEL ================= */}
        <section className="w-9/20 overflow-y-auto no-scrollbar">
          <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#f9f8f5] dark:bg-black text-center">
            {/* LEFT CONTENT */}
            <h1 className="text-7xl font-semibold text-black dark:text-zinc-50">
              CARA YEE
              <br />
              <br />
            </h1>

            <p className="text-lg text-zinc-700 dark:text-zinc-400">
              Hi, I am Cara - so great to connect with you! I am currently
              pursuing a Business and Computer Science degree at the University of
              British Columbia in Vancouver.
              <br />
              <br />
            </p>
            <Slideshow />
            <p className="text-lg text-zinc-700 dark:text-zinc-400">
              <br />
              <br />
              When I am away from my computer, you can find me baking macarons,
              either planning this year&apos;s travels, or running absolutely
              nowhere - currently training for a 10km race in Calgary!
              <br />
              <br />
              If anything on this page resonates with you, I&apos;d love to hear
              from you.
              <br />
              <br />
              Thanks for taking the time to explore my work!
            </p>
          </main>
        </section>

        {/* ================= RIGHT PANEL ================= */}
        <section className="w-11/20 overflow-y-auto no-scrollbar">
          <main className="gap-6 flex min-h-screen w-full max-w-3xl flex-col items-start justify-between py-32 px-16 bg-[#f2f0e8] dark:bg-black sm:items-start">
            {/* RIGHT CONTENT */}
            <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
              Discover Me
            </h1>

            <p className="flex w-full text-lg text-zinc-700 dark:text-zinc-400">
              <a href="https://www.linkedin.com/in/carayee/" target="_blank">
                LinkedIn
              </a>
              <a
                href="https://github.com/carayee"
                className="mx-auto"
                target="_blank"
              >
                GitHub
              </a>
              <a href="mailto:carayee8@gmail.com" target="_blank">
                Email
              </a>
            </p>

            <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
              Technical Languages:
            </h1>
            <p className="flex w-full text-lg text-zinc-700 dark:text-zinc-400">
              Java, R, React, JavaScript, TypeScript, TailWind CSS, HTML, CSS ,
              C, C++, Python, Microsoft Office Suite, Business Intelligence
              (RStudio, Tableau, Power BI), VS Code, Git, GitHub, IntelliJ,
              Jira, Object-Oriented Programming
            </p>

            <div className="flex items-center gap-6 w-full">
              <h1 className="text-5xl font-semibold text-black dark:text-zinc-50">
                2026
              </h1>
              <div className="flex-1 h-px bg-black"></div>
            </div>

            <div className="flex gap-4 w-full">
              {/* Left column */}
              <div className="w-40">
                <h2 className="text-2xl font-semibold">Experience</h2>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-4 w-full max-w-2xl">
                <Experience
                  logo="/Shell.jpg"
                  company="Shell"
                  role="Technical Product Manager | Internship"
                  link="https://www.shell.ca/"
                  date="Jan - Apr"
                />
              </div>
            </div>

            <div className="flex items-center gap-6 w-full">
              <h1 className="text-5xl font-semibold text-black dark:text-zinc-50">
                2025
              </h1>
              <div className="flex-1 h-px bg-black"></div>
            </div>

            <div className="flex gap-4 w-full">
              {/* Left column */}
              <div className="w-40">
                <h2 className="text-2xl font-semibold">Experience</h2>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-4 w-full max-w-2xl">
                <Experience
                  logo="/Connacher.jpg"
                  company="Connacher"
                  role="Marketing Data Analyst | Internship"
                  link="https://www.connacheroil.com/"
                  date="Jul - Aug"
                />
              </div>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}
