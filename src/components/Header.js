import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex flex-row justify-between w-full h-16 items-center">
      <Link href="/" className="flex flex-col w-fit p-2">
        <Image
          src="/justincase_icon_logo.png"
          alt="logo"
          width={60}
          height={60}
        />
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
