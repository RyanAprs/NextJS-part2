"use client"

import React from 'react';
import Image from 'next/image';
import profile from '@/public/profile.jpg';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
  return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >
                        <Image 
                            src={profile}
                            alt='Ryan image' 
                            width="192" 
                            height="192"
                            quality="95"
                            priority={true}
                            className='h-30 w-30 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                        />
                    </motion.div>
                </div>
            </div>

            <motion.h1
                className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-[1.5rem]'
                initial={{ opacity:0, y:100 }}
                animate={{ opacity: 1, y:0 }}
            >
                <span className="font-bold">Hello, I'm Ryan.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> based in  
                <span className='font-bold'> Central Java, Indonesia</span> . I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>

            <motion.div 
                className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link 
                    href="#contact" 
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition'
                >
                    Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> 
                </Link>

                <a 
                    href="" download
                    className='group bg-white text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer border border-black/10'
                >
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </a>

                <a href="https://www.linkedin.com/in/ryan-adi-prasetyo/" target='_blank' className='bg-white text-gray-700 text-[1.35rem] p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'>
                    <BsLinkedin />
                </a>

                <a href="https://github.com/RyanAprs" target='_blank' className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'> 
                    <BsGithub />
                </a>

            </motion.div>
        </section>
    );
};