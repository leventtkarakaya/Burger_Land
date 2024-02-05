import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-red-400 ">
        <div className="flex items-center justify-center lg:flex-col">
          <Link href={"#"}>
            <Image src={"/Logo.png"} alt="logo" width={100} height={100} />
          </Link>
          {/* icons */}
          <div className="flex mb-2 text-white lg:flex-row gap-x-6">
            <Link href={"#"}>
              <FaInstagram />
            </Link>
            <Link href={"#"}>
              <FaYoutube />
            </Link>
            <Link href={"#"}>
              <FaFacebook />
            </Link>
            <Link href={"#"}>
              <FaTwitter />
            </Link>
          </div>
          <div>Tüm hakkları saklıdır</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
