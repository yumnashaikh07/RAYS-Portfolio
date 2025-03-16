import Image from "next/image";
import Link from "next/link";
export default function  Herosection ()
{
    return(
        <main className="  mx-auto mb-5 md:my-5"> 
      <section className=" grid grid-cols-1 md:grid-cols-2 ">
      <div className="">
      <Image 
      src={"/images/p1.webp"}
      width={500}
      height={500}
      alt="image"
      quality={100}
      className="md:flex justify-center mx-auto"/>
</div>
<div className=" ml-10 md:ml-0 hero-div mr-5 md:mr-0">
      <div className="hero-slide ">
          {/* <div className="md:text-4xl text-3xl mb-3 font-thin text-[#1f4676]"> */}
          <div className="md:text-7xl text-5xl my-3 font-thin text-[#1f4676]  ">
            <h1>
              {/* <strong>YUMNA</strong> */}
              <strong>RAYS</strong>
            </h1>
            <h1>
              {/* <strong>SHAIKH</strong> */}
            </h1>
          </div>
          <div className="bg-[#112a46] w-[195px] h-1"></div>
          {/* <h3 className="md:text-7xl text-5xl my-5 font-thin text-[#1f4676]  "> */}
            {/* WEB-DEVELOPER */}
            <h3 className="md:text-5xl text-3xl my-3  text-[#1f4676]">
            Tech<span className="text-base">&</span>Design
          </h3>
          <div className="md:text-xl  md:ml-2 md:mt-5 text-slate-900 ">
          {/* <p >I create tailored websites and applications that</p>
          <p >combine visual appeal with high functionality</p>  */}
          <ul><p><span  className="font-bold text-[#1f4676]">Where Creativity Meets Innovation!</span> We craft stunning visuals, dynamic videos, and seamless websites to elevate your brand’s digital presence.</p>
            <h5 className="font-semibold text-[#1f4676] mt-3">Our Expertise:</h5>
            <li className="my-3">. Web Development</li>
            <li>. Logo Design</li>
            <li className="my-3">. Video Editing</li>
            <li>. Thumbnail Design</li>
          </ul>
          </div>
          <div>
          <button className="px-16 text-xl mt-7  py-3 items-center mr-5 md:ml-2 bg-[#1f4676]  hover:bg-[#d4d3ca] text-white ">
            <Link href={"/contact"} >For Queries</Link></button>
          </div>
        </div>
  </div>    
      </section>
        </main>
    
)
}