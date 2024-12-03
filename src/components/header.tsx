import Link from "next/link";
import Image from "next/image"; 
import HeaderSheet from "./headersheet";
export default function Header() {
  return ( 

    <main className="bg-[#d4d3ca] shadow-lg h-20 md:h-28 mx-auto">
      <section className=" flex justify-between items-center text-[#1f4676]">
        <div className="rounded-lg">
          <Image
            src={"/images/RAYS222.png"}
            className=" mx-auto "
            width={107}
            height={107}
            alt="logo"
          />
        </div>
        
        <nav className="md:flex md:justify-between md:items-center hidden  ">
          <ul className="flex md:space-x-9 text-lg  font-semibold md:mr-11 ">
          <li><Link href="/profile" className="hover:underline">Profile</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/projects" className="hover:underline">Projects</Link></li>      
          </ul>
        </nav>
        <HeaderSheet />
      </section>
    </main>
  );
}
