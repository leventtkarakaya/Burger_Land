// Next Image
import Image from "next/image";
// Next Link
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="absolute w-full bg-pink-50/20">
      <div className="flex items-center justify-between container mx-auto">
        {/* logo */}
        <Link href={"#"}>
          <Image src={"/Logo.png"} width={100} height={100} alt="Logo" />
        </Link>
        {/* phone & cart */}
        <div className="flex items-center gap-x-8 text-white">
          {/* phone */}
          <div className="flex gap-x-5 ">
            <Image src={"/phone.svg"} alt="phone" width={50} height={50} />
            <div className="text-center">
              <span className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                7/24 Sipariş
              </span>
              <div className="text-3xl font-robotoCondensed font-extrabold">
                +90 212 555 55
              </div>
            </div>
          </div>
          {/* cart */}
          <div className="relative cursor-pointer hidden lg:flex">
            <Image src={"/bag.svg"} alt="sepet" width={40} height={40} />
            {/* amount */}
            <div className="absolute -bottom-2 -right-1 rounded-full w-6 h-6 bg-amount">
              <span className="flex items-center justify-center ">3</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
