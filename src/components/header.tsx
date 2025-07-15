import Link from "next/link";
import Image from "next/image"; 
import HeaderSheet from "./headersheet";
export default function Header() {
  return ( 
    // <main className="bg-[#000000] border-[1px] border-white h-[73px]  mx-auto">
    <main className="sticky top-0 z-50 backdrop-blur-lg  h-[73px] mx-auto shadow-md">
      <section className=" flex justify-between  text-[#ffff]">
        <div className="md:flex hidden rounded-lg md:ml-7 ">
          <Link
            href="/"
            className="md:mx-auto"
          >
          <Image
            src={"/images/LogoRAYS(5).png"}
            className=" md:mx-auto "
            width={79}
            height={79}
            alt="logo"
          /></Link>
        </div>
        <div className="md:hidden mb-3 flex rounded-lg ">
            <Link
            href="/"
            className="md:mx-auto"
          >
          <Image
            src={"/images/LogoRAYS(5).png"}
            className=" ml-3 mt-3 mx-auto "
            width={57}
            height={57}
            alt="logo"
          /></Link>
        </div>
        
        <nav className=" glacial-font md:flex my-5 md:justify-between hidden  ">
          <ul className="flex md:space-x-7 text-xl  md:mr-11 ">
          <li><Link href="/#service" className="hover:underline">Services</Link></li>
          <li><Link href="/projects" className="hover:underline">Work</Link></li>
          <li><Link href="/#contact"  className="hover:underline">Ask</Link></li>
          <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
          <li><Link href="https://calendly.com/raystechndesign/30min" className="border-white border-[3px] bg-[#a66cb2] rounded-full py-1 px-1   hover:bg-[#baa6c0] hover:border-[#a66cb2]">Book Meeting</Link></li>
          </ul>
        </nav>
        <HeaderSheet />
      </section>
    </main>
  );
}
