type ExperienceProps = {
  logo: string;
  company: string;
  role: string;
  link: string;
  date: string;
};

export default function Experience({
  logo,
  company,
  role,
  link,
  date,
}: ExperienceProps) {
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
      {/* Logo */}
      <img
        src={logo}
        alt={`${company} logo`}
        className="w-8 h-8 object-contain"
      />

      {/* Text */}
      <div className="flex items-center justify-between w-full">
        <span className="font-semibold text-1xl">
          {company}
        </span>

        <span className="text-1xl text-right">
          {role}
        </span>
      </div>

      <span
        className="
          pointer-events-none
          absolute -top-2 right-3
          text-xs font-medium
          bg-gray-900 text-white
          px-2 py-1 rounded-md
          shadow-md
          opacity-0 translate-y-1
          transition-all duration-200
          group-hover:opacity-100 group-hover:translate-y-0
        "
      >
        {date}
      </span>
    </a>
  );
}