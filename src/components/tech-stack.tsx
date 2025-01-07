import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiBun, SiPrisma, SiShadcnui } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import Image from "next/image";


 
export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Tech Stack
      </span>
 
      <OrbitingCircles iconSize={40}>
        <Icons.nextjs />
        <Icons.react />
        <Icons.prisma />
        <Icons.postgres />
        <Icons.bun />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <Icons.uploadthing />
        <Icons.shadcn />
        <Icons.tailwind />
        <Icons.github />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
    nextjs: () => (
        
        <RiNextjsFill className="text-5xl" />
    ),
    react: () => (
      <FaReact className="text-5xl" />
    ),
    tailwind: () => (
        <RiTailwindCssFill className="text-5xl" />
    ),
    shadcn: () => (
        <SiShadcnui className="text-5xl" />
    ),
    prisma: () => (
        <SiPrisma className="text-5xl" />

    ),
    postgres: () => (
        <BiLogoPostgresql className="text-5xl" />

    ),
    uploadthing: () => (
      <Image src={'https://imgs.search.brave.com/QQmKUWX4OCsAb8IwUK_WphzjHojLDMiq9B7ArgZPGHI/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2MyMmE3Y2E0/MTI3ZGRkMmI5OWZk/ZWUxNTZiYTMyZWJl/N2Y3MWYzNzcyZGFj/ZTVhYWI5OTM2NTEz/ZjRjN2FhOC91cGxv/YWR0aGluZy5jb20v' } alt="uploadthing" width={32} height={32} />
    ),
    github: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M50 0C22.4 0 0 22.4 0 50C0 72.1 14.3 90.8 34.2 97.4C36.7 97.9 37.5 96.3 37.5 95C37.5 93.8 37.5 90.8 37.5 86.7C23.8 89.6 20.8 80 20.8 80C18.3 74.2 15 72.5 15 72.5C10.4 69.6 15.4 69.6 15.4 69.6C20.4 70 22.9 75 22.9 75C27.5 82.5 34.6 80.4 37.5 79.2C38.3 76.3 39.6 74.2 40.8 72.9C29.6 71.7 18.3 67.5 18.3 47.9C18.3 42.5 20.4 38.3 22.9 35C22.1 33.8 20.4 28.3 22.9 21.3C22.9 21.3 27.1 20 37.5 26.7C41.7 25.4 45.8 25 50 25C54.2 25 58.3 25.4 62.5 26.7C72.9 20 77.1 21.3 77.1 21.3C79.6 28.3 77.9 33.8 77.1 35C79.6 38.3 81.7 42.5 81.7 47.9C81.7 67.5 70.4 71.7 59.2 72.9C60.8 74.6 62.5 77.5 62.5 82.5C62.5 89.6 62.5 93.3 62.5 95C62.5 96.3 63.3 97.9 65.8 97.4C85.7 90.8 100 72.1 100 50C100 22.4 77.6 0 50 0Z" fill="currentColor"/>
      </svg>
    ),
    bun: () => (
        <SiBun className="text-5xl" />
    ),
    nextauth: () => (
      <Image src={'https://imgs.search.brave.com/Hz81CzpXBt_WHwzPJNexhtgsE1EAOgrhk-E7CgXvLm0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oeWdy/YXBoLmNvbS9fbmV4/dC9pbWFnZT91cmw9/aHR0cHM6Ly9ldS1j/ZW50cmFsLTEtc2hh/cmVkLWV1YzEtMDIu/Z3JhcGhhc3NldHMu/Y29tL0F2SFEzUkR2/RlNvdXNBOGl3RWxP/S3ovNzB6aFk2cWFR/bWlHTUhDS3dLekYm/dz0xMjgwJnE9NzU'} alt="nextauth" width={32} height={32} />
    )
  };
  
  export default Icons;