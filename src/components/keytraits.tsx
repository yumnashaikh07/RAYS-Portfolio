import Image from "next/image"
export default function KeyTraits(){
    return(
        <main className=" bg-[#1f4676]  md:mt-32 mx-auto md:h-[450px] ">
            <h1 className=" text-4xl md:text-5xl mb-9 p-3 text-center ">
          <strong>KEY TRAITS</strong>
           </h1>
           <section className="grid grid-cols-1 md:grid-cols-3 px-4">
            <div className="text-center">
                <Image 
                src={"/images/key3.webp"}
                width={175}
                height={175}
                alt="keytraits"
                className="mb-2 md:my-0 my-5 mx-auto border-4  border-black "/>
               
                    <h3 className="font-bold font-serif p-1  text-xl md:text-2xl">Attention to Detail</h3>
                    <p className="">I create user-centric web solutions with attention to detail, prioritizing usability and seamless functionality for a positive user experience.</p>  
            </div>
    
            <div className="text-center">
            <Image 
                src={"/images/key11.jpg"}
                width={175}
                height={175}
                alt="keytraits"
                className="mb-2 md:my-0 my-5 mx-auto border-4 border-black"/>
            <h3 className="font-bold font-serif  p-1 text-xl md:text-2xl">Quick Turnaround</h3>
                    <p className="">Quick turnaround is a core strength of mine, enabling me to complete website development and production in just one week</p>
               
            </div>
            <div className="text-center">
            <Image 
                src={"/images/key222.jpg"}
                width={175}
                height={175}
                alt="keytraits"
                className="mb-2 md:my-0 my-5 mx-auto border-4 border-black"/>
                
                <h3 className="font-bold font-serif p-1 text-xl md:text-2xl">Effective Communication</h3>
                    <p className="mb-5 ">Effective communication is a key skill of mine,  ensuring clear understanding, smooth collaboration, and successful project outcomes.</p>
                </div>
            </section>
            
        </main>
    )
}