import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <main className="flex items-center justify-between container py-7">
        <Link href="/">
          <Image src="/DesignTicks_Logo.svg" width={225} height={58.373} />
        </Link>
        <ul className="flex gap-24 items-center justify-center">
          <Link href="/services">
            <li className="header-menu poppins-font">Services</li>
          </Link>
          <Link href="/services">
            <li className="header-menu poppins-font">Project</li>
          </Link>
          <Link href="/services">
            <li className="header-menu poppins-font">Our Blog</li>
          </Link>
          <Link href="/contact">
            <li className="header-menu poppins-font">Contact Us</li>
          </Link>
        </ul>
        <Link
          href="/contact"
          className="px-9 bg-orange-50 rounded-full text-white py-2 header-menu poppins-font"
        >
          Contact Us
        </Link>
      </main>
    </>
  );
};

export default Navbar;
