import React from "react";
import {
  FaServer,
  FaGlobe,
  FaLightbulb,
  FaBullhorn,
  FaPaintBrush,
  FaSearch,
} from "react-icons/fa";
export default function Servicecard() {
  return (
    <main className=" mx-auto mt-14">
      <h1 className=" text-4xl md:text-5xl mb-14 text-center ">
        <strong>SERVICES</strong>
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between md:mx-11">
        <div className="bg-gray-700 rounded-lg p-6  md:mx-0 mx-3   mb-4  text-white ">
          <div className="flex justify-center mb-4">
            <div className="bg-[#1f4676] p-3 rounded-full">
              <FaPaintBrush />
            </div>
          </div>
          <h2 className="font-bold text-center mb-2 text-xl">UI/UX Design</h2>
          <p className="text-slate-300">
            I create intuitive interfaces that
            <span className="font-bold"> Enhance User Experience</span> and
            navigation, ensuring they align perfectly with your brand for
            maximum engagement.
          </p>
          <div className="h-1 bg-slate-900  rounded-full mt-3"></div>
        </div>

        <div className="bg-gray-700 rounded-lg p-6  md:mx-0 mx-3  mb-4 text-white">
          <div className="flex justify-center mb-4">
            <div className="bg-[#1f4676] p-3 rounded-full">
              <FaGlobe />
            </div>
          </div>
          <h2 className="font-bold text-center mb-2  text-xl">
            Website Development
          </h2>
          <p className="text-slate-300">
            I build <span className="font-bold">Custom Websites</span> tailored
            to your needs, combining functionality with aesthetic design to
            elevate your online presence.
          </p>
          <div className="h-1 bg-slate-900 rounded-full mt-3"></div>
        </div>

        <div className="bg-gray-700 rounded-lg p-6  md:mx-0 mx-3 mb-4 text-white">
          <div className="flex justify-center mb-4">
            <div className="bg-[#1f4676] p-3 rounded-full">
              <FaLightbulb />
            </div>
          </div>
          <h2 className="font-bold text-center mb-2 text-xl">
            Consultation Services
          </h2>
          <p className="text-slate-300">
            I provide expert guidance on{" "}
            <span className="font-bold"> Web Strategy</span> and
            <span className="font-bold"> Digital Marketing</span> to effectively
            achieve your business goals and maximize growth potential.
          </p>
          <div className="h-1 bg-slate-900 rounded-full mt-3"></div>
        </div>

        <div className="bg-gray-700 rounded-lg p-6  md:mx-0 mx-3   mb-4 text-white">
          <div className="flex justify-center mb-4">
            <div className="bg-[#1f4676] p-3 rounded-full">
              <FaSearch />
            </div>
          </div>
          <h2 className="font-bold text-center mb-2 text-xl">SEO Service</h2>
          <p className="text-slate-300">
            I offer tailored SEO services to enhance your online presence and
            <span className="font-bold"> drive organic traffic</span> through
            keyword research, on-page optimization, and content strategies.
          </p>
          <div className="h-1 bg-slate-900 rounded-full mt-3"></div>
        </div>

        <div className="bg-gray-700 rounded-lg p-6  md:mx-0 mx-3   mb-4 text-white">
          <div className="flex justify-center mb-4">
            <div className="bg-[#1f4676]  p-3 rounded-full">
              <FaBullhorn />
            </div>
          </div>
          <h2 className="font-bold text-center mb-2  text-xl">
            Social Integration
          </h2>
          <p className="text-slate-300">
            I design high-converting landing pages that capture attention,
            engage users, and drive actionable results for your
            <span className="font-bold"> business objectives</span>.
          </p>
          <div className="h-1 bg-slate-900  rounded-full mt-3"></div>
        </div>

        <div className="bg-gray-700 rounded-lg p-6  md:mx-0 mx-3  mb-4 text-white"> 
          <div className="flex justify-center mb-4">
            <div className="bg-[#1f4676]  p-3 rounded-full">
              <FaServer />
            </div>
          </div>
          <h2 className="font-bold text-center mb-2 text-xl">
            Backend Development
          </h2>
          <p className="text-slate-300 ">
            I offer <span className="font-bold">Backend Development</span> services 
            Using APIs I ensure seamless communication between your frontend and
            backend. 
          </p>
          <div className="h-1 bg-slate-900 rounded-full mt-3"></div>
        </div>
      </section>
    </main>
  );
}
