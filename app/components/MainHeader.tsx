import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import Image from "next/image";

const MainHeader = () => {
  return (
    <header className="flex items-center justify-between p-16 absolute w-full max-h-[320px] top-0 left-0 ">
      <Link href={"/"} className="flex items-center justify-center gap-4">
        <Image
          src={logoImg}
          width={48}
          height={48}
          alt="logo"
          sizes="icon"
          priority
        />{" "}
        <p className="hidden md:block md:text-2xl md:font-semibold">
          NextLevel Food
        </p>
      </Link>

      <nav>
        <ul className="flex items-center justify-between gap-4">
          <li>
            <Link
              href={"/meals"}
              className="text-lg font-semibold tracking-tight"
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="text-lg font-semibold tracking-tight"
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
