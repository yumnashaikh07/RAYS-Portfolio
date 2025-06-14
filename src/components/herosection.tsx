"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function Herosection() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/animation/heroanimation.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  return (
    <main className="mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-white hero-div md:mt-9 ml-0 md:ml-28 mr-5 md:mr-0">
          <div className="hero-slide">
            <div className="md:text-7xl md:ml-10 ml-[137px] text-5xl my-3 font-thin">
              <h1>
                <strong>RAYS</strong>
              </h1>
            </div>
            <div className="bg-[#112a46] md:w-[195px] w-[130px] h-1 md:ml-10 ml-32"></div>
            <h3 className="md:ml-10 ml-28 md:text-5xl text-3xl my-3">
              Tech<span className="text-base">&</span>Design
            </h3>
            <div className="md:ml-10 ml-16 md:text-xl flex-col flex md:mt-5">
              <p className="font-bold">📍All Digital Solutions at one Place</p>
              <div className="md:ml-6 ml-5">
                <h5>We craft stunning visuals, dynamic</h5>
                <h5>videos, and seamless websites.</h5>
              </div>
            </div>
            <div className="md:ml-10 ml-28">
              <div>
                <Button className="px-7 py-6 rounded-full galcia-font font-bold text-xl mt-7 items-center mr-5 md:ml-2 bg-white text-black hover:bg-black hover:text-white">
                  <Link href={"/#contactc"}>For Queries</Link>
                </Button>
              </div>
              <div>
                <Button className="px-5 py-[19px] rounded-full galcia-font ml-5 font-extralight text-xl mt-3 items-center mr-5 bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-black">
                  <Link href={"/#bundle"}>See Offers</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex  justify-center">
          {animationData && (
            <Lottie
              loop
              play
              animationData={animationData}
              style={{ width: 700, height: 700 }}
            />
          )}
        </div>
      </section>
    </main>
  );
}
// npm uninstall react-lottie-player
