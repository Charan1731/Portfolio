"use client";
import Hero from "@/components/Hero";
import { IconBook, IconBrandGithub, IconBrandHackerrank, IconBrandInstagram, IconBrandVite, IconBrandX, IconCertificate2, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems}/> */}
        <FloatingDock items={[{
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "About",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconBrandVite className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Achievements",
      icon: (
        <IconCertificate2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#achievements",
    },
    {
      title: "Skills",
      icon: (
        <IconBrandHackerrank className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title:"Eduaction",
      icon:(
        <IconBook />
      ),
      href:"#education"
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title:"Instagram",
      icon: (
        <IconBrandInstagram className="w-full h-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "#"
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Charan1731",
      target:'_blank'
    },]}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
      </div>
    </main>
  );
}
