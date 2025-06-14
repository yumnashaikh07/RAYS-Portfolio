import Link from "next/link";
import { ArrowDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

 export default function HeaderSheet (){
    return(
      <main className=" md:hidden   ">
      <Sheet >
        <SheetTrigger><h1 className=" flex items-center justify-between text-2xl mx-5 my-4 glacial-font">Menu <Menu className="mt-[5px] " color="white" size={25}/></h1></SheetTrigger>
<SheetContent className="bg-white">
<SheetHeader>
<SheetTitle className="text-black mt-7 font-thin glacial-font text-xl mb-9 flex justify-center">DISCUSS YOUR PROJECT<ArrowDown size={25}/></SheetTitle>
<SheetDescription>
  <button><Link href={"/#contact"} className="text-xl font text-white px-5 hover:text-[#131415] hover:border-2 hover:border-black hover:bg-white py-5 bg-[#000000]">
  FOR QUERIES
  </Link></button>
</SheetDescription>
</SheetHeader>
<ul className=" mt-14 text-black text-3xl space-y-3 ">
  <li><Link href="#service" className="hover:underline">Services</Link></li>
  <div className=" border-t w-full bg-black"></div>
  <li><Link href="/projects" className="hover:underline">Work</Link></li>
  <div className=" border-t w-full bg-black"></div>
   <li><Link href="/#contact" className="hover:underline">Ask</Link></li>
  <div className=" border-t w-full bg-black"></div>
  <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
  <div className=" border-t w-full bg-black"></div>
  <li><Link href="/" className="hover:underline">Book Meeting</Link></li>
</ul>
</SheetContent>
</Sheet>

  </main>
)
}  