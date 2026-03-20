import Image from "next/image";
import Slideshow from "./components/Slideshow";
import Experience from "./components/Experience";
import MapChart from "./components/MapChart";
import Travels from "./components/Travels";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-[#f9f8f5] font-sans dark:bg-black max-md:h-auto">
      <div className="flex h-full w-full max-md:flex-col">
        {/* ================= LEFT PANEL ================= */}
        <section className="w-9/20 overflow-y-auto max-md:w-full no-scrollbar max-md:overflow-visible">
          <main className="flex w-full max-w-3xl flex-col items-center pt-25 px-16 pb-4 bg-[#f9f8f5] dark:bg-black text-center">
            <h1 className="text-8xl px-1 pb-10 text-black dark:text-zinc-50">
              CARA YEE
              <br />
            </h1>

            <p className="text-lg text-zinc-700 dark:text-zinc-400">
              Hi, I am Cara - so great to connect with you! I am currently
              pursuing a dual major in Business and Computer Science at the
              University of British Columbia in Vancouver.
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
              If anything on this page resonates with you, please reach out.
              <br />
              <br />
              Thanks for taking the time to explore my work. Follow along with
              my travel adventures below!
            </p>
          </main>
          <MapChart />
          <p className="text-1xl text-center text-zinc-700 dark:text-zinc-400 pb-40">
            Hover over the map for a glimpse of mini me 🙊.
          </p>
        </section>

        {/* ================= RIGHT PANEL ================= */}
        <section className="w-11/20 overflow-y-auto no-scrollbar max-md:w-full max-md:overflow-visible">
          <main className="gap-6 flex min-h-screen w-full max-w-3xl flex-col items-start justify-between py-32 px-16 bg-[#f2f0e8] dark:bg-black sm:items-start">
            <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
              Discover Me:
            </h1>

            <p className="grid grid-cols-3 w-full text-lg text-zinc-700 dark:text-zinc-400">
              <a href="https://www.linkedin.com/in/carayee/" target="_blank">
                LinkedIn
              </a>
              <a
                href="https://github.com/carayee"
                className="text-center"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="mailto:carayee8@gmail.com"
                className="text-right"
                target="_blank"
              >
                Email
              </a>
              <a href="https://vsco.co/cara-yee/gallery" target="_blank">
                VSCO
              </a>
              <a
                href="https://calendly.com/carayee"
                className="text-center"
                target="_blank"
              >
                Calendly
              </a>
              <a
                href="https://locket.camera/links/SCdgicxSx9fGaxes8"
                className="text-right"
                target="_blank"
              >
                Locket 💛
              </a>
            </p>

            <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
              Technical:
            </h1>
            <div className="flex flex-wrap gap-6">
              <img
                src={"/java.jpg"}
                alt={"Java"}
                className="w-10 h-10 object-contain"
              />
              <img
                src={"/r.jpg"}
                alt={"R"}
                className="w-10 h-10 object-contain"
              />
              <img
                src={"/python.jpg"}
                alt={"Python"}
                className="w-10 h-10 object-contain"
              />
              <img
                src={"/javascript.jpg"}
                alt={"JavaScript"}
                className="w-10 h-10 object-contain"
              />
              <img
                src={"/react.jpg"}
                alt={"React"}
                className="w-10 h-10 object-contain"
              />
              <img
                src={"/css.jpg"}
                alt={"CSS"}
                className="w-10 h-10 object-contain"
              />
              <img
                src={"/html.jpg"}
                alt={"HTML"}
                className="w-10 h-10 object-contain"
              />
              <img
                src={"/office.jpg"}
                alt={"Microsoft Office Suite"}
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="flex items-center gap-6 w-full">
              <h1 className="text-5xl font-semibold text-black dark:text-zinc-50">
                2026
              </h1>
              <div className="flex-1 h-px bg-black"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              {/* Left column */}
              <div className="w-40">
                <h2 className="text-2xl font-semibold">Experience</h2>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-2 w-full max-w-2xl">
                <div>
                  <Experience
                    logo="/Shell.jpg"
                    company="Shell"
                    role="Business Engineer | Internship"
                    link="https://www.shell.ca/"
                    date="May - Aug"
                  />
                </div>
                <div>
                  <Experience
                    logo="/Shell.jpg"
                    company="Shell"
                    role="Technical Product Manager | Internship"
                    link="https://www.shell.ca/"
                    date="Jan - Apr"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="w-40">
                <h2 className="text-2xl font-semibold">Travels</h2>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-2 w-full max-w-2xl">
                <div>
                  <Travels flag="🇨🇦" city="Toronto" date="Jun" />
                </div>
                <div>
                  <Travels
                    flag="🇨🇦"
                    city="Toronto | Bruno Mars concert"
                    date="May"
                  />
                </div>
                <div>
                  <Travels flag="🇵🇹" city="Lisbon" date="May" />
                </div>
                <div>
                  <Travels flag="🇪🇸" city="Barcelona" date="May" />
                </div>
                <div>
                  <Travels flag="🇨🇮" city="Rome" date="Apr" />
                </div>
                <div>
                  <Travels flag="🇨🇦" city="Waterloo" date="Feb" />
                </div>
                <div>
                  <Travels flag="🇨🇦" city="London" date="Feb" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="w-40">
                <h2 className="text-2xl font-semibold">Projects</h2>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-2 w-full max-w-2xl">
                <div>
                  <Projects
                    name="Portfolio"
                    skills={
                      "Frontend: Next.js, React\nStyling: Tailwind CSS, CSS\nLanguages: JavaScript, TypeScript, HTML, CSS"
                    }
                    link="https://github.com/carayee/Cara-Portfolio"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 w-full">
              <h1 className="text-5xl font-semibold text-black dark:text-zinc-50">
                2025
              </h1>
              <div className="flex-1 h-px bg-black"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              {/* Left column */}
              <div className="w-40">
                <h2 className="text-2xl font-semibold">Experience</h2>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-2 w-full max-w-2xl">
                <Experience
                  logo="/Connacher.jpg"
                  company="Connacher"
                  role="Marketing Data Analyst | Internship"
                  link="https://www.connacheroil.com/"
                  date="Jul - Aug"
                />
                <Experience
                  logo="/canadawest.jpg"
                  company="Canada West"
                  role="Volleyball Coach"
                  link="https://rallypointe.com/canada-west-vc/teams/"
                  date="Jan-Dec"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="w-40">
                <h2 className="text-2xl font-semibold">Travels</h2>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-2 w-full max-w-2xl">
                <div>
                  <Travels flag="🇨🇦" city="Whistler" date="Dec" />
                </div>
                <div>
                  <Travels
                    flag="🇨🇦"
                    city="Vancouver | The Weeknd concert"
                    date="Jul"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="w-40">
                <h2 className="text-2xl font-semibold">Projects</h2>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-2 w-full max-w-2xl">
                <div>
                  <Projects
                    name="Library Manager"
                    skills={"Java, JUnit, Java Swing"}
                    link="https://github.com/carayee/Library-Management-System"
                  />
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}
