type ProjectsProps = {
  name: string;
  skills: string;
  link: string;
};

export default function Projects({ name, skills, link }: ProjectsProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
      group relative
        flex items-center gap-4 w-full
        bg-[#f2f0e8] px-4 py-2 rounded-xl
        transition-all duration-300
        hover:bg-gray-300 hover:shadow-md
      "
    >
      {/* Text */}
      <div className="flex items-start justify-between w-full  dark:text-black">
        <span className="font-semibold text-1xl">{name}</span>

        <span className="text-1xl text-right whitespace-pre-line">
          {skills}
        </span>
      </div>
    </a>
  );
}
