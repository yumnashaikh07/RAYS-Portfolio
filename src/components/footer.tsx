import ContactIcons from './icon';
import Link from "next/link";
export default function Footer (){
return(
  <footer className="bg-[#d4d3ca] h-auto mx-auto py-3 md:py-10">
  <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[900px]">
    <div className="mt-5 flex justify-center md:justify-start">
      <ContactIcons />
    </div>
    <nav className="text-slate-900 font-bold text-center md:text-left mt-5 md:mt-0">
      <h4 className="text-2xl mt-5">QUICK LINKS:</h4>
      <ul className="font-semibold space-y-2 mt-5 text-xl">
        <li><Link href="/" className="hover:text-[#1f4676]">Profile</Link></li>
        <li><Link href="/contact" className="hover:text-[#1f4676]">Contact</Link></li>
        <li><Link href="/about" className="hover:text-[#1f4676]">About</Link></li>
        <li><Link href="/projects" className="hover:text-[#1f4676]">Projects</Link></li>
      </ul>
    </nav>

  </section>
  <div className="text-sm flex items-center justify-center text-gray-700 mt-5">
    © 2024 My Portfolio Website | All rights reserved
  </div>
  <div className="text-sm flex items-center justify-center text-gray-700 mt-2">
    Powered by RAYS Solutions
  </div>
</footer>
)}