import BentoVideoGrid from '@/components/bento'
import {  ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='mt-20 flex flex-col items-center justify-center'>
      <Link href={'https://medium.com/@bikkydahal'} target='_blank'>
      <h3 className='text-2xl mt-10 cursor-pointer hover:scale-110 transition-all duration-1000 text-teal-400'>Let&apos;s recharge your wisdom <ArrowUpRight className='inline-block bg-teal-300 text-red-500'/> <span>🔋</span></h3>
      </Link>
        <p className='mt-10'>Will add here later...</p>
      <div className=' w-full '>
        <div className='bg-gradient-to-r text-3xl grid place-items-center font-mono bg-clip-text text-transparent from-slate-400 to-teal-500 p-10 rounded-lg'>
          Recommended Watch 
        </div>
        <div>
          <BentoVideoGrid />
        </div>
      </div>
    </div>
  )
}

export default BlogPage