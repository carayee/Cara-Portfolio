import Image from "next/image";
import Slideshow from "./components/Slideshow";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-[#f9f8f5] font-sans dark:bg-black">
      <div className="flex h-full w-full">
        {/* ================= LEFT PANEL ================= */}
        <section className="w-1/2 overflow-y-auto no-scrollbar">
          <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#f9f8f5] dark:bg-black text-center">
            {/* LEFT CONTENT */}
            <h1 className="text-7xl font-semibold text-black dark:text-zinc-50">
              CARA YEE
              <br />
              <br />
            </h1>

            <p className="text-lg text-zinc-700 dark:text-zinc-400">
              Hi, I am Cara - so great to connect with you! I am currently
              studying Business and Computer Science at the University of
              British Columbia in Vancouver.
              <br />
              <br />
            </p>
            <Slideshow />
            <p className="text-lg text-zinc-700 dark:text-zinc-400">
              <br />
              <br />
              When I am away from my computer, you can find me baking macarons,
              either planning this year&apos;s travels, or lacing up my running
              shoes - currently training for a 10km race in Calgary!
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
        <section className="w-1/2 overflow-y-auto no-scrollbar">
          <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-between py-32 px-16 bg-[#f2f0e8] dark:bg-black sm:items-start">
            {/* RIGHT CONTENT */}
            <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
              Discover Me
              <br />
              <br />
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
              2026
              <br />
              <br />
            </h1>

            <div className="flex w-full text-lg text-zinc-700 dark:text-zinc-400">
              <a
                href="https://www.shell.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center gap-4 bg-gray-200 px-6 py-4 rounded-xl
                transition-all duration-300 hover:bg-gray-300 hover:shadow-md"
              >
                {/* Logo */}
                <img
                  src="/Shell.jpg"
                  alt="Shell logo"
                  className="w-8 h-8 rounded"
                />

                {/* Text */}
                <div className="flex items-center gap-6">
                  <span className="font-semibold text-lg">Shell</span>
                  <span className="text-lg">
                    Technical Product Manager | Internship
                  </span>
                </div>
              </a>
            </div>

            <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
              2025
              <br />
              <br />
            </h1>

            <div className="flex w-full text-lg text-zinc-700 dark:text-zinc-400">
              <a
                href="https://www.connacheroil.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center gap-4 bg-gray-200 px-6 py-4 rounded-xl
                transition-all duration-300 hover:bg-gray-300 hover:shadow-md"
              >
                {/* Logo */}
                <img
                  src="/Connacher.jpg"
                  alt="Connacher logo"
                  className="w-8 h-8 rounded"
                />

                {/* Text */}
                <div className="flex items-center gap-6">
                  <span className="font-semibold text-lg">Connacher</span>
                  <span className="text-lg">
                    Marketing Data Analyst | Internship
                  </span>
                </div>
              </a>
            </div>

            {/* Scroll filler
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i}>Right panel content {i + 1}</p>
            ))}
            */}
          </main>
        </section>
      </div>
    </div>
  );
}
