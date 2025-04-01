"use client";
import Hero from "@/components/Hero";
import { IconBook, IconBrandGithub, IconBrandHackerrank, IconBrandInstagram, IconBrandVite, IconBrandX, IconCertificate2, IconHome, IconTerminal2 } from "@tabler/icons-react";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { FloatingDock } from "@/components/ui/floating-dock";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Fun from "@/components/Fun";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
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
      href: "#skills",
    },
    {
      title:"Education",
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
      href: "https://x.com/CharanR18433412",
    },
    {
      title:"Instagram",
      icon: (
        <IconBrandInstagram className="w-full h-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "https://www.instagram.com/__.charan.__1731"
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
        <Achievements/>
        <Skills/>
        <Education/>
        <Fun/>
        <Footer/>
        <ScrollToTop />
      </div>
    </main>
  );
}
