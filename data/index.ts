import { title } from "process";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I’m driven by a constant desire to learn, grow, and make a difference in the tech world.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Passionate about solving problems with efficient solutions.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "New Technologies",
      description: "I'm currently learning",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Web 3.0-based blog platform",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Web 3.0 based Blog Website",
      des: "Explore the future of blogging with my decentralized Web 3.0 platform, built using React, TypeScript",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://blippi-frontend.vercel.app/",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "/ui.yoom.com",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Secured a funding of ₹2,00,000 from NewGen IDEC for a waste management startup idea focused on developing innovation solutions for efficient waste disposal and recycling.",
      name: "NewGen IDEC",
      img:"cvr.png" ,
      title: "CVR College Of Engineering",
    },
    {
      quote:"Secured 2nd among 20 top teams from various universities in a codeathon organised by BOSCH BGSW on the occasion of Engineer's Day",
      name:"Codeathon",
      img:"bosch.png",
      title:"BOSCH, BGSW"
    },
    {
      quote:
        "Secured a funding of ₹2,00,000 from NewGen IDEC for a waste management startup idea focused on developing innovation solutions for efficient waste disposal and recycling.",
      name: "NewGen IDEC",
      img:"cvr.png" ,
      title: "CVR College Of Engineering",
    },
    {
      quote:"Secured 2nd among 20 top teams from various universities in a codeathon organised by BOSCH BGSW on the occasion of Engineer's Day",
      name:"Codeathon",
      img:"bosch.png",
      title:"BOSCH, BGSW"
    },
    {
      quote:
        "Secured a funding of ₹2,00,000 from NewGen IDEC for a waste management startup idea focused on developing innovation solutions for efficient waste disposal and recycling.",
      name: "NewGen IDEC",
      img:"cvr.png" ,
      title: "CVR College Of Engineering",
    },
    {
      quote:"Secured 2nd among 20 top teams from various universities in a codeathon organised by BOSCH BGSW on the occasion of Engineer's Day",
      name:"Codeathon",
      img:"bosch.png",
      title:"BOSCH, BGSW"
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Google",
      img: "/google.png",
      nameImg: "/googleName.png",
    },
    {
      id: 2,
      name: "JP Morgan and chase",
      img: "/app.svg",
      nameImg: "/jpmc.png",
    },
    {
      id: 3,
      name: "Formula 1",
      img: "/host.svg",
      nameImg: "/f1.png",
    },
    {
      id: 4,
      name: "meta",
      img: "/s.svg",
      nameImg: "/meta.png",
    },
    {
      id: 5,
      name: "Nvidia",
      img: "/dock.svg",
      nameImg: "/nvidia.png",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "CVR College of Engineering",
      desc: `B-Tech in Computer Science`,
      className: "md:col-span-2",
      thumbnail: "/cvr.png",
    },
    {
      id: 2,
      title: "CVR College of Engineering",
      desc: "Minor Degree in AIML",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/cvr.png",
    },
    {
      id: 3,
      title: "Fiitjee Junior College",
      desc: "Intermediate",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/fiitjee.png",
    },
    {
      id: 4,
      title: "Johnson Grammar School",
      desc: "Schooling",
      className: "md:col-span-2",
      thumbnail: "/jgs.png",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url:"https://github.com/Charan1731",
    },
    {
      id: 2,
      img: "/twit.svg",
      url:"https://x.com/CharanR18433412"
    },
    {
      id: 3,
      img: "/link.svg",
      url:"https://www.linkedin.com/in/charandeep-reddy-2640a4301/",
    },
  ];