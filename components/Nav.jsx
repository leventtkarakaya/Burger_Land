// Next Image
import Image from "next/image";
// Next Link
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="absolute w-full bg-pink-50/20">
      <div className="container flex items-center justify-between mx-auto">
        {/* logo */}
        <Link href={"#"}>
          <Image src={"/Logo.png"} width={100} height={100} alt="Logo" />
        </Link>
        {/* phone & cart */}
        <div className="flex items-center text-white gap-x-8">
          {/* phone */}
          <div className="flex gap-x-5 ">
            <Image src={"/phone.svg"} alt="phone" width={50} height={50} />
            <div className="text-center">
              <span className="text-xl font-medium leading-none uppercase font-robotoCondensed">
                7/24 Sipariş
              </span>
              <div className="text-2xl font-extrabold font-robotoCondensed">
                +90 212 555 55
              </div>
            </div>
          </div>
          {/* cart */}
          <div className="relative hidden cursor-pointer lg:flex">
            <Image src={"/bag.svg"} alt="sepet" width={40} height={40} />
            {/* amount */}
            <div className="absolute w-6 h-6 rounded-full -bottom-2 -right-1 bg-amount">
              <span className="flex items-center justify-center ">3</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
