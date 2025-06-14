import ContactIcons from "./icon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white px-5 py-3">
      <section className="grid grid-cols-1 md:flex md:justify-between md:gap-0 gap-3 items-center max-w-7xl mx-auto">

        {/* Contact Icons */}
        <div className="flex justify-center md:justify-start">
          <ContactIcons /> {/* Make sure your ContactIcons supports size prop */}
        </div>

        {/* Quick Links */}
        <nav className="text-center md:mb-9 mb-0 md:text-left">
          <h4 className="text-sm font-bold tracking-widest text-[#bfbfbf] mb-2">QUICK LINKS</h4>
          <ul className="space-y-1 text-sm font-medium text-[#d1d1d1]">
          <li><Link href="/#service" className="hover:underline">Services</Link></li>
          <li><Link href="/projects" className="hover:underline">Work</Link></li>
          <li><Link href="/pricingpdf" className="hover:underline">Pricing</Link></li>
          <li><Link href="/calendly" className="hover:underline">Book Meeting</Link></li>
          </ul>
        </nav>

        {/* Footer Text */}
      <div className="md:hidden text-center md:text-right text-sm text-[#999999] space-y-1">
  <p>© 2024 All rights reserved.</p>
  <p>
    Created by
    <Link
      href="https://raysportfolio.vercel.app/"
      target="_blank"
      className="ml-1 hover:text-white underline transition-colors duration-200"
    >
      RAYS Tech & Design
    </Link>
  </p>
</div>

      </section>
    </footer>
  );
}
