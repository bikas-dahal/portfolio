'use client'

import { usePathname } from "next/navigation"
import { ModeToggle } from "./theme-switch"
import Link from "next/link"
import {  FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Mail } from "lucide-react"


const Links = [{
    title: "Home",
    href: '/',
}, {
    title: 'Blog',
    href: '/blog',
}]

export const Header = () => {

    const pathname = usePathname()


    return (
        <div className="w-full mt-0 sm:left-48  mb-3 sm:py-4 p-2 backdrop-blur-md  fixed z-100">
            <div className="flex items-center justify-between ">
                <div className="w-full flex items-center justify-start gap-4">
                    {Links.map((link) => (
                        <Link key={link.title} href={link.href}>
                            <h1 className={` text-md sm:text-2xl pl-2 custom-hover rounded-md font-mono font-bold ${pathname === link.href ? 'text-primary bg-opacity-10 shadow-md bg-slate-100' : 'text-muted-foreground'}`}>{link.title}</h1>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center ml-12  sm:mr-72 justify-end gap-4">
                    <Link href={'https://www.linkedin.com/in/bikas-dahal-2229301b3/'} className="custom-hover">
                        <FaLinkedin className="text-2xl " />
                    </Link>
                    <Link href={'https://github.com/bikas-dahal'} className="custom-hover">
                        <FaGithub className="text-2xl" />
                    </Link>
                    <Link href={'https://x.com/bikas__dahal'} className="custom-hover">
                        <FaTwitter className="text-2xl" />
                    </Link>
                    
                    <span className="mr-[-8px] ">
                        <Link href={`mailto:bikkydahal@gmail.com`}>
                            <Mail className="text-2xl sm:hidden custom-hover" />
                            <div className=" custom-hover hidden sm:block text-md text-muted-foreground">bikkydahal@gmail.com</div>
                        </Link>
                    </span>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}