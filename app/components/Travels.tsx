type TravelsProps = {
  flag: string;
  city: string;
};

export default function Travels({ flag, city}: TravelsProps) {
  return (
    <a
      className="
      group relative
        flex items-center gap-5 w-full
        bg-[#f2f0e8] px-4 py-2 rounded-xl
        transition-all duration-300
        hover:bg-gray-300 hover:shadow-md
      "
    >
      <div className=" text-4xl w-9 h-9 flex items-center justify-center">
        {flag}
      </div>

      <div className="flex items-center justify-end w-full dark:text-black">
        <span className="text-1xl text-right">{city}</span>
      </div>
    </a>
  );
}
