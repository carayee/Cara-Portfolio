type TravelsProps = {
  flag: string;
  city: string;
  date: string;
};

export default function Travels({
  flag,
  city,
  date,
}: TravelsProps) {
  return (
    <a className="
      group relative
        flex items-center gap-5 w-full
        bg-[#f2f0e8] px-4 py-2 rounded-xl
        transition-all duration-300
        hover:bg-gray-300 hover:shadow-md
      "
    >
      {/* FLag */}
      <div className=" text-4xl w-10 h-10 flex items-center justify-center">
        {flag}
      </div>

      {/* Text */}
      <div className="flex items-center justify-end w-full">
        <span className="text-1xl text-right">
          {city}
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