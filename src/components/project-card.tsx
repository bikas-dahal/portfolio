import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import {  ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";


type ProjectCardProps = {
    title: string;
    description: string;
    techStack: string[];
    liveLink: string;
    githubLink: string;
    features?: string[];
  };

export const ProjectCard = ({ title, description, techStack, liveLink, githubLink, features }: ProjectCardProps) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });

    const blur = useTransform(scrollYProgress, [0, 0.5], [5, 0]);


    return (

        <motion.div ref={ref} style={{ filter: `blur(${blur}px)` }}>

            <Card className="w-full mb-6 hover:shadow-lg transition-shadow">
            <CardHeader>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-sm text-muted-foreground mb-4">{description}</div>
                {features && (
                <ul className="list-disc pl-4 mb-4 space-y-1">
                    {features.map((feature, index) => (
                    <li key={index} className="text-sm">{feature}</li>
                    ))}
                </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                ))}
                </div>
                <div className="flex gap-4 mt-4">
                {liveLink && (
                    <Button variant="outline" asChild>
                    <Link href={liveLink} target="_blank" className="flex items-center justify-center">Live Demo <ExternalLink className=" h-4 w-4" /> </Link>
                    </Button>
                )}
                {githubLink && (
                    <Button variant="outline" asChild>
                    <Link href={githubLink} target="_blank">
                        <FaGithub className="mr-2 h-4 w-4" />
                        GitHub
                    </Link>
                    </Button>
                )}
                </div>
            </CardContent>
            </Card>
        </motion.div>

    )
}

  