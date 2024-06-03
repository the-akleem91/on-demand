"use client"

import React, { useRef } from 'react'
import Container from '../BasicLayout/Container'
import { PlaceHolderUI } from '../ui/HeroInput'
import { motion, useScroll } from "framer-motion"

function HeroSection() {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({ target: ref });
    console.log(scrollYProgress)

    return (
        <Container className={"py-8"}>
            <div className='flex justify-center gap-6 flex-col items-center'>
                <p className='text-2xl font-semibold bg-gradient-to-r from-[#0066FE] to-[#3BCD92]  text-transparent bg-clip-text'>AI powered Food Safety, consul</p>
                <h1 className='text-5xl font-bold text-white text-center'>Lorem ipsum dolor sit amet emmr uo emel
                </h1>
                <h2 className='text-2xl text-center w-10/12 font-medium text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur, aliquid vero quaerat numquam ipsum dolores rerum sunt aut assumenda!
                </h2>
                {/* <PlaceHolderUI />

                <motion.div className='w-full mt-16 p-3 rounded-lg bg-white/20 shadow-lg ring-1 ring-black/5'
                    ref={ref}
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className='from-[#cc2b5e] to-[#753a88] bg-gradient-to-r rounded-md h-screen '>
                        jjkkl
                    </div>
                </motion.div> */}
            </div>
        </Container>
    )
}

export default HeroSection