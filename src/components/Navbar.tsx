import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/utils/constants";

import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flexStart flex-1 gap-10">
        <Link href="/">
          <Image
            src="/gridds-logo-black.png"
            width={115}
            height={40}
            alt="Gridds"
          />
        </Link>
        <ul className="text-small hidden gap-7 xl:flex">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
