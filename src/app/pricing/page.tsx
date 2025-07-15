import Image from "next/image"
import Bundle from "@/components/bundle"
export default function Pricing(){
    return(
<main className="my-10">
    <h1 className="text-4xl md:text-5xl text-white text-center font-bold mb-10 tracking-wide">
        PRICING CATALOG
      </h1>
   

    <Image
    src="/images/RAYSPRICINGCATALOG.png"
    alt="Description of the image"
    width={500}
    height={500}
    className="mx-auto my-10"
    />
     <Bundle/>
</main>
    )
}