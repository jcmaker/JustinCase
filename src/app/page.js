import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <div className="flex flex-col justify-between lg:flex-row items-center bg-[#2B2929] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-3xl font-bold ">
            Welcome to JustinCase. <br />
            <br />
            Storing everything for just in case. All in one place
          </h1>
          <br />
          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit rounded-md"
          >
            Try it for free! <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div className="flex flex-col justify-evenly items-center flex-1 p-5 pt-0">
          <Image
            src="/justincase_icon_logo.png"
            alt="logo"
            width={300}
            height={300}
          />
          <Image
            src="/justincase_text_logo.png"
            alt="logo"
            width={300}
            height={300}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
