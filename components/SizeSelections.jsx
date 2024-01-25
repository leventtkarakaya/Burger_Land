import Image from "next/image";

const SizeSelections = ({ burger, setSize, size }) => {
  return (
    <div className="mx-auto max-w-sm">
      {/* size */}
      <div className="flex flex-1 container gap-x-20 justify-center items-center">
        <label>
          <Image
            src={burger.image}
            width={60}
            height={60}
            alt="burger small"
            priority={1}
            className={`${
              size === "small"
                ? "border-2 border-red-500 p-1 rounded-full"
                : "border-transparent filter saturate-50"
            } mb-2`}
          />
          <input
            type="radio"
            name="size"
            value="small"
            className="appearance-none"
            onChange={(e) => setSize(e.target.value)}
            checked={size === "small"}
          />
          <span className="ml-2">Small</span>
        </label>
        <label>
          <Image
            src={burger.image}
            width={70}
            height={70}
            alt="burger medium"
            priority={1}
            className={`${
              size === "medium"
                ? "border-2 border-red-500 rounded-full"
                : "border-transparent filter saturate-50"
            } mb-1`}
          />
          <input
            type="radio"
            name="size"
            value="medium"
            onChange={(e) => setSize(e.target.value)}
            checked={size === "medium"}
            className="appearance-none"
          />
          <span className="ml-1">Medium</span>
        </label>
        <label>
          <Image
            src={burger.image}
            width={80}
            height={80}
            alt="burger large"
            priority={1}
            className={`${
              size === "large"
                ? "border-2 rounded-full border-red-500"
                : " border-transparent filter saturate-50"
            }`}
          />
          <input
            type="radio"
            name="size"
            value="large"
            onChange={(e) => setSize(e.target.value)}
            checked={size === "large"}
            className="appearance-none"
          />
          <span className="ml-4">Large</span>
        </label>
      </div>
    </div>
  );
};
export default SizeSelections;
