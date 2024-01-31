import Image from "next/image";

const SizeSelections = ({ burger, setSize, size }) => {
  return (
    <div className="flex items-center justify-center max-w-sm mx-auto lg:max-w-none lg:justify-start">
      {/* size */}
      <div className="container flex items-baseline justify-center flex-1 mb-10 gap-x-20">
        {/* small  */}
        <label>
          <Image
            src={burger.image}
            width={60}
            height={60}
            alt="Küçük Burger"
            priority={1}
            className={`${
              size === "Küçük"
                ? "border-2 border-red-500 p-1 rounded-full"
                : "border-transparent filter saturate-50"
            } mt-5 `}
          />
          <input
            type="radio"
            name="size"
            value="Küçük"
            className="appearance-none"
            onChange={(e) => setSize(e.target.value)}
            checked={size === "Küçük"}
          />
          <span className="lg:ml-[6px]">Küçük</span>
        </label>
        {/* medium */}
        <label>
          <Image
            src={burger.image}
            width={65}
            height={65}
            alt="burger Orta"
            priority={1}
            className={`${
              size === "Orta"
                ? "border-2 border-red-500 p-1 rounded-full"
                : "border-transparent filter saturate-50"
            }`}
          />
          <input
            type="radio"
            name="size"
            value="Orta"
            onChange={(e) => setSize(e.target.value)}
            checked={size === "Orta"}
            className="appearance-none"
          />
          <span className=" lg:ml-3">Orta</span>
        </label>
        {/* large */}
        <label>
          <Image
            src={burger.image}
            width={75}
            height={75}
            alt="burger Büyük"
            priority={1}
            className={`${
              size === "Büyük"
                ? "border-2 rounded-full border-red-500 p-1"
                : " border-transparent filter saturate-50"
            }`}
          />
          <input
            type="radio"
            name="size"
            value="Büyük"
            onChange={(e) => setSize(e.target.value)}
            checked={size === "Büyük"}
            className="appearance-none"
          />
          <span className="lg:ml-3">Büyük</span>
        </label>
      </div>
    </div>
  );
};
export default SizeSelections;
