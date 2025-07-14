"use client";
import { useState } from "react";
import Image from "next/image";
const projectData = {
  websites: [
    {
      Image: "/images/web1.png",
      title: "Event Planning Website",
      description:
        "An event planning agency site built with Next.js and TailwindCSS.",
      VercelLink: "https://event-planning-agency-website.vercel.app/",
    },
    {
      Image: "/images/web3.png",
      title: "Blog Website",
      description:
        "Feature-rich blog site built with dynamic content, SEO-friendly structure, and smooth routing.",
      VercelLink: "https://raysblog.vercel.app/",
    },
    {
      Image: "/images/web2.png",
      title: "E-commerce Website",
      description:
        "Custom e-commerce site with cart, wishlist, payment and Sanity CMS.",
      VercelLink: "https://ecom-project-demo.vercel.app/",
    },
  ],
  videos: [
    {
      Image: "/images/video1.png",
      title: "Fashion Reel Edit",
      description:
        "Cinematic color grading and fast-paced cuts for fashion content.",
      VercelLink: "https://www.instagram.com/reel/CmockVideo01/",
    },
    {
      Image: "/images/video2.png",
      title: "Product Promo",
      description: "Motion graphics and transitions for social product ads.",
      VercelLink: "https://www.instagram.com/reel/CmockVideo02/",
    },
    {
      Image: "/images/video3.png",
      title: "Travel Montage",
      description: "Fast cut edits for Instagram travel montage videos.",
      VercelLink: "https://www.instagram.com/reel/CmockVideo03/",
    },
  ],
  thumbnails: [
    {
      Image: "/images/thumnail1.png",
      title: "Tech Review Thumbnail",
      description: "Clean bold style for maximum visibility on YouTube.",
      VercelLink: "https://www.youtube.com/watch?v=mockthumb1",
    },
    {
      Image: "/images/thumnail1.png",
      title: "Podcast Thumbnail",
      description: "Engaging layout for YouTube talk series episodes.",
      VercelLink: "https://www.youtube.com/watch?v=mockthumb2",
    },
    {
      Image: "/images/thumb3.png",
      title: "Tutorial Thumbnail",
      description:
        "Step-by-step style tutorial graphics for educational content.",
      VercelLink: "https://www.youtube.com/watch?v=mockthumb3",
    },
  ],
  logos: [
    {
      Image: "/images/logo1.png",
      title: "Cafe Logo",
      description: "Rustic-modern logo for a local cafe.",
      VercelLink: "https://dribbble.com/shots/mock-logo1",
    },
    {
      Image: "/images/logo2.png",
      title: "Tech Startup Logo",
      description: "Clean and sharp branding for SaaS startup.",
      VercelLink: "https://dribbble.com/shots/mock-logo2",
    },
    {
      Image: "/images/logo3.png",
      title: "Personal Brand Logo",
      description: "Minimal logotype for a freelancer’s brand.",
      VercelLink: "https://dribbble.com/shots/mock-logo3",
    },
  ],
};

export default function ProjectsComponent() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <main
      className="min-h-screen py-16 px-6"
      style={{
        background: "linear-gradient(to right, #000000, #737373, #737373)",
      }}
    >
      <h1 className="text-4xl md:text-5xl text-white text-center font-bold mb-10 tracking-wide">
        WORK
      </h1>
{Object.entries(projectData).map(([category, projects], index) => (
  <section key={index} className="mb-20">
    <h2
      className="text-2xl md:text-3xl font-bold tracking-wide mb-6 pb-2 border-b border-[#d38bf9] text-white border-drop-shadow-[0_0_6px_#d38bf9]"
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </h2>

    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${
        category === "thumbnails" ? "md:gap-8" : ""
      }`}
    >
      {projects.map((project, idx) => (
   <div
  key={idx}
  onClick={() => setLightboxImage(project.Image)}
  className={`rounded-xl cursor-pointer bg-[#1a1a1a] text-white border p-4 transition-all duration-300
    hover:border-[#d38bf9] hover:shadow-[0_0_15px_#d38bf9]/40
    border-[#737373] opacity-0 animate-fadeIn`}
  style={{
    animationDelay: `${idx * 0.1}s`,
    animationFillMode: "forwards",
  }}
>
  <div className="aspect-video overflow-hidden rounded-md mb-4 border border-[#333]">
    <Image
      src={project.Image}
      alt={project.title}
      className="w-full h-full object-cover hover:opacity-90 transition duration-300"
    />
  </div>
  <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
  <p className="text-sm text-[#d1d1d1] mb-3">{project.description}</p>
  <a
    href={project.VercelLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-sm font-medium text-[#d38bf9] underline hover:text-white transition duration-200"
  >
    View Project ↗
  </a>
</div>

      ))}
    </div>
  </section>
))}
</main>)}