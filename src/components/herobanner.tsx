"use client";
import React from 'react'
import {useEffect , useState} from 'react'

const texts =
[
    `*Welcome to my Portfolio*` ,
    `#Open to Work`,
    `Lets Build something Together!`
];
function Herobanner (): React.ReactElement{
    const[ index , setIndex] = useState<number>(0)

useEffect(() => {
    const timeoutId = setTimeout(() => {
        setIndex((prevIndex : number) => (prevIndex +1) % texts.length);
    },3000)
    return() => clearTimeout(timeoutId);},
    [index]);

    const next = ()=>{
        setIndex((prevIndex :number)=>(prevIndex + 1) % texts.length)
    }
    const prev =()=> {
        setIndex((prevIndex : number) => (prevIndex-1+texts.length) % texts.length)
    }

    return(
        <main className='mx-auto'>        
            <div className='relative flex items-center justify-center bg-[#1f4676] text-[#d4d3ca] h-11 '> 
              <h1 className ="text-center text-xl font-bold transition-transform duration-500 hover:scale-105">{texts[index]}</h1>
            <div className='flex justify-between items-center '>
                <button onClick={prev} className=' absolute  left-1 text-3xl md:w-16 font-semibold hover:scale-125 '>&lt;</button>
                <button onClick={next} className=' absolute right-1 text-3xl md:w-16 font-semibold hover:scale-125 '>&gt;</button>
            </div>
        </div>
        </main>

    )}
export default Herobanner;