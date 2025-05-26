import Link from "next/link";
import { Menu } from "lucide-react";
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
      <main className=" md:hidden  ">
      <Sheet>
<SheetTrigger><Menu className=" flex items-center justify-between mx-5 " size={24}/></SheetTrigger>
<SheetContent>
<SheetHeader>
<SheetTitle className="text-[#1f4676]  font-thin text-3xl mb-3 flex justify-center">GET TO KNOW</SheetTitle>
<SheetDescription className="flex flex-col">
  <button><Link href={"/contact"} className="text-xl font text-[#d4d3ca] mt-9 px-5 hover:text-[#1f4676] hover:bg-[#d4d3ca] py-5 bg-[#1f4676]">
  FOR QUERIES
  </Link>
  </button>
</SheetDescription>
</SheetHeader>
<ul className=" mt-24 text-[#1f4676]  text-3xl space-y-3 ">
  <li><Link href="/profile" className="hover:underline">Profile</Link></li>
  <div className=" border-t w-full bg-black"></div>
  <li><Link href="/contact" className="hover:underline">Contact</Link></li>
  {/* <div className=" border-t w-full bg-black"></div> */}
  {/* <li><Link href="/about" className="hover:underline">About</Link></li> */}
  <div className=" border-t w-full bg-black"></div>
  <li><Link href="/projects" className="hover:underline">Work</Link></li>
</ul>
</SheetContent>
</Sheet>

  </main>
)
}  