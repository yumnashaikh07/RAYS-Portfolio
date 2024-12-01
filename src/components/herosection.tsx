import Image from "next/image";
import Link from "next/link";
export default function  Herosection ()
{
    return(
        <main className=" md:h-[600px] mx-auto mb-5 md:my-20"> 
      <section className=" grid grid-cols-1 md:grid-cols-2 ">
      <div className="md:p-16">
      <Image 
      src={"/images/PORT 1.png"}
      width={500}
      height={500}
      alt="image"
      quality={100}
      className="md:flex justify-center mx-auto"/>
</div>
<div className=" ml-10 md:ml-0 hero-div mr-5 md:mr-0">
      <div className="hero-slide ">
          <div className="md:text-4xl text-3xl mb-3 font-thin text-[#1f4676]">
            <h1>
              <strong>YUMNA</strong>
            </h1>
            <h1>
              <strong>SHAIKH</strong>
            </h1>
          </div>
          <div className="bg-black w-[137px] h-1"></div>
          <h3 className="md:text-7xl text-5xl my-5 font-thin text-[#1f4676]  ">
            WEB-DEVELOPER
          </h3>
          <div className="md:text-xl  md:ml-2 md:my-5 text-slate-900 font-extralight">
          <p >I create tailored websites and applications that</p>
          <p >combine visual appeal with high functionality</p> 
          </div>
          <div>
          <button className="px-16 text-xl mt-7 md:mt-14 py-3 items-center mr-5 md:ml-2 bg-[#1f4676]  hover:bg-[#d4d3ca] text-white font-thin">
            <Link href={"/contact"} >For Queries</Link></button>
          </div>
        </div>
  </div>    
      </section>
        </main>
    
)
}