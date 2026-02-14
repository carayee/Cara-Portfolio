import Image from "next/image";
import Slideshow from "./components/Slideshow";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-[#f2f0e8] font-sans dark:bg-black">
      <div className="flex h-full w-full">
        {/* ================= LEFT PANEL ================= */}
        <section className="w-1/2 overflow-y-auto no-scrollbar">
          <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#f2f0e8] dark:bg-black sm:items-start">
            {/* LEFT CONTENT */}
            <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
              Cara Yee
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
            <Slideshow/>
            <p className="text-lg text-zinc-700 dark:text-zinc-400">
              <br />
              <br />
              When I am away from my computer, you can find me baking macarons,
              either planning this year's travels, or lacing up my running shoes
              - currently training for a 10km race in Calgary!
            </p>

            {/* Scroll filler */}
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i}>Left panel content {i + 1}</p>
            ))}
          </main>
        </section>

        {/* ================= RIGHT PANEL ================= */}
        <section className="w-1/2 overflow-y-auto no-scrollbar">
          <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#f2f0e8] dark:bg-black sm:items-start">
            {/* RIGHT CONTENT */}
            <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
              RIGHT PANEL
            </h1>

            <p className="text-lg text-zinc-700 dark:text-zinc-400">
              Use this area for visuals, animations, or secondary content.
            </p>

            {/* Scroll filler */}
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i}>Right panel content {i + 1}</p>
            ))}
          </main>
        </section>
      </div>
    </div>
  );
}
