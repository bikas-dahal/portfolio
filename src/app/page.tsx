'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { OrbitingCirclesDemo } from "@/components/tech-stack";

import TypingAnimation from "@/components/ui/typing-animation";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";



export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.div 
      className="min-h-screen p-8 mt-16 max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold grid place-items-center font-mono bg-gradient-to-r from-sky-600 to-violet-600 text-transparent bg-clip-text mb-4">
          Hi👋, <br />I&apos;m Bikas Dahal
        </h1>
        <p className="sm:text-xl text-[1.1rem]  sm:mx-28 text-muted-foreground font-sans text-pretty">
          <TypingAnimation>
            A junior NextJS Developer from Nepal 🇳🇵
          </TypingAnimation>
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-4">
        <OrbitingCirclesDemo />
      </motion.div>

      <motion.section variants={itemVariants} className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Latest Projects</h2>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>
      </motion.section>

      <motion.div variants={itemVariants} className="text-center">
        <div className="text-lg mb-4 font-semibold text-teal-200">
          All my projects are available 
          <Link 
            href="https://plucky-fifth-18a.notion.site/Projects-Detail-156362d9650580899035d3bfa493fa5c?pvs=4" 
            className="text-blue-600 hover:text-blue-800 ml-2 font-medium font-mono"
            target="_blank"
          >
            Here
          </Link>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="text-center">
        <p className="text-lg mb-4 text-teal-400">
          Currently enrolled in Cohort 3 by
          <Link 
            href="https://100xdevs.com/" 
            className="text-blue-600 hover:text-blue-800 ml-2 font-medium font-mono"
            target="_blank"
          >
            Harkirat Singh
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}