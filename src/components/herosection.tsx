
"use client";
import {
  Code,
  Image,
  ScissorsSquare,
  Monitor,
  BarChart3,
  Rocket
} from "lucide-react";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Herosection() {
  return (
    <main className="relative w-full overflow-hidden text-white">
 
      {/* <div className="absolute top-[-20%] left-[10%] w-[300px] h-[300px] bg-[#a66cb2] blur-[120px] opacity-30 rounded-full z-0 animate-pulse"></div>
      <div className="absolute bottom-[-15%] right-[5%] w-[250px] h-[250px] bg-[#baa6c0] blur-[100px] opacity-30 rounded-full z-0 animate-pulse"></div>
      <div className="absolute top-[30%] left-[35%] w-[400px] h-[400px] bg-[#a66cb2] blur-[150px] opacity-20 rounded-full z-0 animate-spin-slow"></div> */}

      <section className="relative z-10 grid grid-cols-1 md:flex md:justify-between items-center  px-6  max-w-7xl mx-auto md:px-40 py-10 md:mb-5 gap-10">

        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl glacial-font font-semibold leading-tight tracking-tight bg-gradient-to-r from-white via-[#baa6c0] to-[#a66cb2] text-transparent bg-clip-text"
          >
            RAYS 
            {/* <Stars className="inline-block w-7 h-7 mb-1 text-[#a66cb2]" /> */}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#baa6c0] via-white to-[#a66cb2] rounded-full h-1 w-28 md:w-40 md:my-4"
          ></motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-3xl md:text-4xl glacial-font md:mb-3"
          >
            Tech <span className="text-base">&</span> Design
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-[#d1d1d1] max-w-md mt-3 text-lg md:text-xl font-light leading-relaxed"
          >
            📍 Empowering digital brands with modern, responsive, and conversion-optimized solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            className="mt-10 flex flex-row items-center gap-4"
          >
            <Button className="px-7 py-6 rounded-full galcia-font font-bold text-xl bg-white text-black hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-white/50">
              <Link href={"/#contact"}>Let&apos;s Talk</Link>
            </Button>
            <Button className="px-7 py-6 rounded-full galcia-font font-bold text-xl bg-white text-black hover:bg-black hover:text-white  transition-all duration-300 shadow-md shadow-amber-100/40">
              <Link href={"/#bundle"}>See Offers</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex justify-center md:justify-end "
        >
          <div className=" bg-black/50 border border-white/10 rounded-2xl p-6 md:p-8 max-w-sm w-full shadow-xl shadow-[#baa6c0]/10">
           <h3 className="text-lg md:text-xl font-semibold text-white mb-4 text-center tracking-wide flex justify-center items-center gap-2">
  <Rocket size={18} className="text-[#d38bf9] drop-shadow-[0_0_6px_#d38bf9]" />
  <span className="text-[#d38bf9] drop-shadow-[0_0_6px_#d38bf9] font-semibold">
    Our Core Expertise
  </span>
</h3>

            <ul className="text-sm text-[#cccccc] space-y-3">
  <li className="flex items-center gap-2 border-b border-white/10 pb-2">
    <Code size={18} className="text-[#d38bf9]" />
    Website Development
  </li>
  <li className="flex items-center gap-2 border-b border-white/10 pb-2">
    <Image size={18}  className="text-[#d38bf9]" />
    Thumbnail + Logo Design
  </li>
  <li className="flex items-center gap-2 border-b border-white/10 pb-2">
    <ScissorsSquare size={18} className="text-[#d38bf9]" />
    Video Editing
  </li>
  <li className="flex items-center gap-2 border-b border-white/10 pb-2">
    <Monitor size={18} className="text-[#d38bf9]" />
    Website Design
  </li>
  <li className="flex items-center gap-2 pb-1">
    <BarChart3 size={18} className="text-[#d38bf9]" />
    Strategy, SEO & Optimization
  </li>
</ul>

          </div>
        </motion.div>
        
      </section>
    </main>
  );
}
// Note: The above code is a complete component for the hero section of a website, showcasing the company's expertise in tech and design. It includes animations, buttons, and a list of services offered.
// // npm uninstall react-lottie-player
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

// export default function Herosection() {
//   const [animationData, setAnimationData] = useState(null);

//   useEffect(() => {
//     fetch("/animation/heroanimation.json")
//       .then((res) => res.json())
//       .then(setAnimationData);
//   }, []);

//   return (
//     <main className="mx-auto md:mb-11">
// <section className="grid grid-cols-1 md:grid-cols-2 items-center  md:text-left text-center">
//   {/* Text Section */}
//   <div className="text-white md:ml-28 md:mr-0 px-6 md:px-0 flex flex-col items-center md:items-start">
//     <div className="hero-slide text-center md:text-left">
      
//       <div className="text-9xl md:text-7xl font-thin">
//         <h1><strong>RAYS</strong></h1>
//       </div>

//       <div className=" bg-[#baa6c0] rounded-full w-[270px] md:w-[163px] h-1 mx-auto md:mx-0 my-2"></div>
//       <h3 className="text-3xl md:text-4xl glacial-font md:my-3">
//         Tech<span className="text-base">&</span>Design
//       </h3>

//       <div className="flex flex-col md:items-start items-center text-lg md:text-xl mt-3 md:mt-11">
//         <p className="font-extralight text-center md:text-left max-w-[300px]">📍All Digital Solutions at one Place</p>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col items-center md:items-start mt-2 md:mt-4">
//         <Button className="px-7 py-6 md:my-3 rounded-full galcia-font font-bold text-xl bg-white text-black hover:bg-black hover:text-white">
//           <Link href={"/#contactc"}>For Queries</Link>
//         </Button>
//         <Button className="px-5 py-[21px] rounded-full galcia-font font-semibold text-xl bg-transparent text-white border border-white hover:bg-white hover:text-black mt-3 md:mt-0 md:ml-3">
//           <Link className="mb-1 " href={"/#bundle"}>See Offers</Link>
//         </Button>
//       </div>

//     </div>
//   </div>

//         {/* Animation Section */}
//         <div className="">
//           {animationData && (
//             <Lottie
//               loop
//               play
//               animationData={animationData}
//               style={{ width: 300, height: 300 }}
//             />
//           )}
//         </div></section>
//     </main>
//   );
// }