"use client";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HeartIcon,
  InstagramLogoIcon,
  PlayIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative mt-10 pt-8 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Contact Me!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find me on any of these platforms.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <Button className="bg-transparent text-slate-900 dark:text-white shadow-lg text-5xl font-normal h-30 w-30 rounded-full items-center justify-center align-middle outline-none">
                <Link
                  href="https://www.instagram.com/justintime_0627"
                  target="_blank"
                >
                  <InstagramLogoIcon />
                </Link>
              </Button>
              <Button className="bg-transparent text-slate-900 dark:text-white shadow-lg text-5xl font-normal h-30 w-30 rounded-full items-center justify-center align-middle outline-none">
                <Link href="https://github.com/jcmaker" target="_blank">
                  <GitHubLogoIcon />
                </Link>
              </Button>
              <Button
                onClick={() => {
                  const textArea = document.createElement("textarea");
                  textArea.value = "jcmaker0627@gmail.com";
                  document.body.appendChild(textArea);
                  textArea.select();
                  document.execCommand("Copy");
                  textArea.remove();
                  alert("My Email is Copied to Clipboard! Crtl + V 💌");
                }}
                className="bg-transparent text-slate-900 dark:text-white shadow-lg text-5xl font-normal h-30 w-30 rounded-full items-center justify-center align-middle outline-none"
              >
                <EnvelopeClosedIcon />
              </Button>
              <Button className="bg-transparent text-slate-900 dark:text-white shadow-lg text-5xl font-normal h-30 w-30 rounded-full items-center justify-center align-middle outline-none">
                <Link
                  href="https://www.youtube.com/channel/UCbcvB1l_2BT5Zb3bi7erQKg"
                  target="_blank"
                >
                  <PlayIcon />
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  My Projects
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      JustinTime
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      JustinAwards
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      3Dprinter
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      Chat-app
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://opensource.org/license/mit/"
                      target="_blank"
                    >
                      MIT License
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.buymeacoffee.com/jcmaker0627"
                      target="_blank"
                    >
                      BuyMeCoffee
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <span className="text-blueGray-500 hover:text-gray-800">
                {" "}
                JustinCase by
              </span>
              <span className="text-blueGray-500 hover:text-blueGray-800">
                {" "}
                Justin
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
