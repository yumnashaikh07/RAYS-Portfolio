"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGlobe,
  FaBullhorn,
  FaPaintBrush,
  FaVectorSquare,
  FaFileImage,
  FaCogs,
  FaVideo,
} from "react-icons/fa";

export default function Servicecard() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 300,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <main
      className="mx-auto md:mt-0 md:p-0 p-5 mt-14"
      style={{
        background: "linear-gradient(to right, #000000, #737373, #737373)",
      }}
    >
      <h1 className="text-4xl md:text-5xl mb-7 text-center text-white font-extrabold">
        SERVICES
      </h1><h3 className="text-2xl md:text-3xl mb-3 text-center text-white font-semibold">
  Elevating Brands Through Design & Technology
</h3>

      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mx-11">
        {[
          {
            icon: <FaPaintBrush />,
            title: "UI/UX Design",
            desc:
              "We deliver CUSTOMIZED DESIGN using WIX Studio and other tools. Our layouts are clean, modern, and tailored to your goals — enhancing both functionality and user engagement.",
          },
          {
            icon: <FaGlobe />,
            title: "Website Development",
            desc:
              "We create responsive, fast, and secure websites — from SINGLE PAGE, BUSINESS WEBSITE to full-scale E-COMMERCE WEBSITE. Built with modern tech and best practices.",
          },
          {
            icon: <FaFileImage />,
            title: "Thumbnail Design",
            desc:
              "We craft high-converting thumbnails for YOUTUBE VIDEOS and INSTAGRAM REELS COVER. Designed to stand out, spark curiosity, and boost your content's visibility.",
          },
          {
            icon: <FaBullhorn />,
            title: "Branding",
            desc:
              "We shape brands through visual storytelling, COLOR PALETTE, and strategic TYPOGRAPHY. Build recognition and trust with a strong and consistent brand identity.",
          },
          {
            icon: <FaCogs />,
            title: "Backend Development",
            desc:
              "We integrate DATABASES, APIs, and CUSTOM BACKEND LOGIC for fast, reliable, and scalable web applications. Built to handle your business operations efficiently.",
          },
          {
            icon: <FaVectorSquare />,
            title: "Logo Design",
            desc:
              "We design memorable logos tailored to your identity — including Abstract Mark, Brand Mark, and Letter Mark styles. Clean, unique, and scalable across platforms.",
          },
          {
            icon: <FaVideo />,
            title: "Video Editing",
            desc:
              "We provide dynamic editing with EFFECTS, TRANSITIONS, AUDIO, and more. Whether it’s a short reel or a promotional video, we tailor it to fit your message and brand.",
          },
        ].map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-[#1a1a1a] rounded-xl p-6 text-white shadow hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex justify-center mb-5">
              <div className="bg-white text-black p-4 rounded-full text-xl shadow-md">
                {service.icon}
              </div>
            </div>
            <h2 className="font-bold text-center text-xl mb-3 text-white">
              {service.title}
            </h2>
            <p className="text-[#d1d1d1] text-sm leading-relaxed text-center">
              {service.desc}
            </p>
            <div className="h-1 bg-[#737373] mx-auto rounded-full mt-5 w-2/3" />
          </div>
        ))}
      </section>
    </main>
  );
}
