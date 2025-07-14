import { MailCheck } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function ContactIcons() {
  return (
    <main className="text-center mt-1">
      <h1 className="text-3xl md:text-lg font-bold mb-4 md:mb-0 tracking-wide text-white">
        FOLLOW FOR UPDATES
      </h1>

      <section className="flex flex-col gap-y-3 items-center p-5 text-white">
        <div><h5 className="text-sm font-thin">SOCIALS LINKS</h5></div>
        <div className="flex flex-row gap-x-4"><a
          href="mailto:you@example.com"
          aria-label="Email"
          className="hover:text-[#d38bf9] hover:drop-shadow-[0_0_6px_#d38bf9] transition-colors"
        >
          <MailCheck size={30} />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-[#d38bf9] hover:drop-shadow-[0_0_6px_#d38bf9] transition-colors"
        >
          <FaInstagram size={30} />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-[#d38bf9] hover:drop-shadow-[0_0_6px_#d38bf9] transition-colors"
        >
          <FaFacebook size={30} />
        </a></div>
      </section>
    </main>
  );
}

