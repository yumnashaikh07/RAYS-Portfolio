import ContactIcons from './icon';
import Link from "next/link";
export default function Footer (){
return(
  <footer className="bg-[#d4d3ca]  mx-auto py-3 ">
  <section className="grid grid-cols-1 md:grid-cols-3 md:gap-x-[900px]">
    <div className="mt-5 flex justify-center md:justify-start">
      <ContactIcons />
    </div>
    <nav className="text-slate-900 font-bold text-center md:text-left mt-5 md:ml-52 mb-3  md:mt-0">
      <h4 className="text-2xl mt-5">QUICK LINKS:</h4>
      <ul className="font-semibold space-y-2 mt-5 text-xl">
        <li><Link href="/" className="hover:text-[#1f4676]">Profile</Link></li>
        <li><Link href="/contact" className="hover:text-[#1f4676]">Contact</Link></li>
        <li><Link href="/about" className="hover:text-[#1f4676]">About</Link></li>
        <li><Link href="/projects" className="hover:text-[#1f4676]">Work</Link></li>
      </ul>
    </nav>

  </section>
  <div className="text-sm flex items-center justify-center text-gray-700 ">
    © 2024 Portfolio Website | All rights reserved
  </div>
  <div className="text-sm flex items-center justify-center text-gray-700 mt-2">
    Powered by<Link className='hover:text-white ml-1' href={"https://raysportfolio.vercel.app/" }> RAYS </Link>
  </div>
</footer>
)}