import Link from "next/link";
import Image from "next/image"; 
import HeaderSheet from "./headersheet";
export default function Header() {
  return ( 
//   <main className="bg-[#d4d3ca]  shadow-lg  md:h-28 mx-auto">
//   <header className="flex justify-between items-center px-3 md:px-8">
    
//     <div className="flex flex-col font-semibold text-xl sm:text-lg  md:text-2xl ">
//       <Image 
        // src="/RAYS (2).png"
        // alt="logo"
        // width={107}
        // height={107}
        // className=""
//       />
//     </div>

//     <nav className=" md:flex md:justify-between  md:items-center hidden ">
//       <ul className="text-[#1f4676] font-bold text-base md:flex md:justify-between  md:text-lg   md:space-x-12  my-3">
//         <li><Link href="/profile" className="hover:underline">Profile</Link></li>
//         <li><Link href="/contact" className="hover:underline">Contact</Link></li>
//         <li><Link href="/about" className="hover:underline">About</Link></li>
//         <li><Link href="/projects" className="hover:underline">Projects</Link></li>      
//       </ul>
//     </nav>
//     <HeaderSheet/>
//   </header>
// </main>
//   )}











    <main className="bg-[#d4d3ca] shadow-lg h-20 md:h-28 mx-auto">
      <section className=" flex justify-between items-center text-[#1f4676]">
        <div className="rounded-lg">
          <Image
            src={"/RAYS (2).png"}
            className="ml-5  h-[80px] w-[80px] md:h-[110px] md:w-[110px]  "
            width={110}
            height={110}
            alt="logo"
          />
        </div>
        
        <nav className="md:flex md:justify-between md:items-center hidden flex-items-end justify-end ">
          <ul className="flex space-x-9 text-lg  font-semibold mr-11 ">
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
