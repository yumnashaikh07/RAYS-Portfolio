import { MailCheck } from "lucide-react";
import {FaInstagram} from "react-icons/fa";

const ContactIcons = () => {
  return (
    <main><h1 className='md:text-lg text-3xl md:ml-14 mx-auto font-bold  mb-0 md:mb-5'>FOLLOW FOR UPDATES</h1>
    <section className=" ml-[87px] p-5 text-black flex">
      <a
        href="mailto:"
        aria-label="Email"
      >
        <MailCheck size={31} className=" md:hidden flex  text-white"/>
        <MailCheck size={29} className=" hidden md:flex  text-white"/>
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className=" text-white hover:underline"
      >
        <FaInstagram size={31}  className=" md:hidden flex ml-8" />
        <FaInstagram size={29}  className=" hidden md:flex ml-8" />
      </a>

      </section>
    </main>
  );
};

export default ContactIcons;

