import { FaReact, FaJsSquare, FaCss3, FaHtml5, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { IoBrushOutline, IoCodeSlashOutline, IoDiamondOutline, IoHomeOutline, IoMove } from "react-icons/io5"
import { AiOutlineAndroid } from "react-icons/ai"
import { LuBot } from 'react-icons/lu'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import { SiAdobe, SiFigma, SiGoogle, SiNetflix, SiSlack, SiSpotify } from 'react-icons/si'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDribbble } from 'react-icons/fa'

// Import Images
import heroImage from '../assets/hero-img.png'
import aboutImage from '../assets/about-us-img-1.jpeg' // Reused in WorkflowSection as heroImg
import portfolio1 from '../assets/Portfolio-1.png'
import portfolio2 from '../assets/Portfolio-2.png'
import profileImg from '../assets/Profile.png'
import logoDark from '../assets/Gabriel-logo-dark.png'

export const siteContent = {
  hero: {
    subtitle: "Hello, I am",
    titleStart: "Gabriel Thankgod",
    typingAnimation: [
      'Software Developer',
      1000,
      'AI Automation Expert',
      1000,
      'Digital Solutions Professional',
      1000
    ],
    description: "I design and build high-performance websites, intelligent mobile applications, and AI-powered systems that help businesses across Nigeria and Africa operate smarter, grow faster, and stand out in a crowded digital landscape.",
    buttonText: "Work With Me",
    image: heroImage,
    stats: {
      yearsOfExperience: "4+",
      clientsText: "Happy Clients"
    }
  },
  about: {
    title: "Who Is ",
    titleSpan: "Gabriel ThankGod?",
    paragraphs: [
      "I am Gabriel Thankgod a digital solutions professional with expertise across web development, mobile applications, AI automation, cybersecurity, branding, motion graphics, business growth strategy, and social media marketing.",
      "My work is built on one belief: technology should solve real problems and create measurable value. Every project I take on from engineering a full-stack application to building a cybersecurity framework is driven by precision, professionalism, and outcomes that matter.",
      "I have worked with startups and established organisations across Nigeria and Africa, helping them leverage digital tools to compete at a higher level. My edge is not just technical skill it is the ability to think strategically and translate that thinking into solutions that actually move the needle.",
      "Eight disciplines. One professional. Everything your digital presence needs, built to work together."
    ],
    contact: {
      emailText: "Email us at",
      email: "gabrielthankgod009@gmail.com",
      phoneText: "Call us at",
      phone: "+2349163497296"
    },
    experienceStat: "4+",
    experienceText: "Years Of Experience",
    image: aboutImage
  },
  services: {
    title: "Eight specialized disciplines",
    titleSpan: " One professional",
    description: "Eight specialized disciplines. One professional. Integrated solutions that work together not just side by side.",
    buttonText: "View All Services",
    footerTextStart: "Elevate your business with creative online solutions.",
    footerTextSpan: " Let’s bring your vision to life today!",
    footerLink: "/contact",
    list: [
      { icon: <LuBot size={50} className="text-accent" />, title: 'AI Automation' },
      { icon: <IoCodeSlashOutline size={50} className="text-accent" />, title: 'Web Development' },
      { icon: <AiOutlineAndroid size={50} className="text-accent" />, title: 'Mobile App Development' },
      { icon: <IoBrushOutline size={50} className="text-accent" />, title: 'Branding' },
      { icon: <IoDiamondOutline size={50} className="text-accent" />, title: 'AI Automation' }, // Note: Duplicate from original
      { icon: <IoMove size={50} className="text-accent" />, title: 'Cybersecurity' },
      { icon: <IoHomeOutline size={50} className="text-accent" />, title: 'Motion Graphics' },
      { icon: <LuBot size={50} className="text-accent" />, title: 'Business Growth Strategy' },
      { icon: <IoCodeSlashOutline size={50} className="text-accent" />, title: 'Social Media Marketing' }
    ]
  },
  skills: {
    title: "Professional ",
    titleSpan: "Skills & Technologies",
    list: [
      { name: 'React', level: '80%', icon: FaReact, iconColor: 'text-blue-500' },
      { name: 'JavaScript', level: '85%', icon: FaJsSquare, iconColor: 'text-yellow-500' },
      { name: 'CSS3', level: '90%', icon: FaCss3, iconColor: 'text-blue-600' },
      { name: 'HTML5', level: '98%', icon: FaHtml5, iconColor: 'text-orange-500' },
      { name: 'Node.js', level: '75%', icon: FaNodeJs, iconColor: 'text-green-500' },
      { name: 'Git', level: '80%', icon: FaGitAlt, iconColor: 'text-red-500' }
    ]
  },
  portfolio: {
    title: "Showcase of my latest projects and",
    titleSpan: " creative work",
    description: "A curated selection of projects spanning web development, mobile applications, AI systems, cybersecurity, branding, and digital marketing.",
    buttonText: "View All Portfolio",
    footerTextStart: "Elevate your business with creative",
    footerTextSpan: " online solutions.",
    footerLink: "/contact",
    projects: [
      {
        id: 1,
        image: portfolio1,
        title: "Volunteer Website Template",
        category: "Web Design",
        link: "https://volunteer-template.example.com"
      },
      {
        id: 2,
        image: portfolio2,
        title: "Digital Marketing Website Template",
        category: "UI / UX Design",
        link: "https://marketing-template.example.com"
      },
      {
        id: 3,
        image: portfolio1,
        title: "Travel Website Template",
        category: "Web Development",
        link: "https://travel-template.example.com"
      }
    ]
  },
  educationAndWork: {
    title: "Foundation and growth: my ",
    titleSpan: "education & work",
    educationTitle: "Education",
    workTitle: "Work experience",
    educationList: [
      { title: "Harmony Institute", subtitle: "Master in Visual Arts", date: "2012 - 2014" },
      { title: "Aurora Academy", subtitle: "Bachelor in Visual Arts", date: "2008 - 2012" },
      { title: "Crystalbrook", subtitle: "High School", date: "1996 - 2008" }
    ],
    workList: [
      { title: "Insightlancer", subtitle: "Senior Designer", date: "2018 - 2024" },
      { title: "Self-Employed", subtitle: "Visual Artist", date: "2016 - 2018" },
      { title: "KG Graphics Studio", subtitle: "Web Designer", date: "2014 - 2016" }
    ]
  },
  workflow: {
    title: "the structured workflow behind ",
    titleSpan: "our success",
    descriptionPart1: "Hi, I'm James, a passionate ",
    descriptionHighlight: "UI/UX designer",
    descriptionPart2: " who thrives on turning ideas into visually stunning realities. With a love for creativity and a meticulous eye for detail.",
    image: aboutImage,
    steps: [
      {
        id: 1,
        title: "1. Discovery and Planning",
        description: "We begin by understanding your vision, goal & requirement. Through collaborative discussions and research, we define the project scope and strategy."
      },
      {
        id: 2,
        title: "2. Design and Development",
        description: "We begin by understanding your vision, goal & requirement. Through collaborative discussions and research."
      },
      {
        id: 3,
        title: "3. Delivery and Support",
        description: "After rigorous testing, we deliver the final product and provide ongoing support to ensure everything runs smoothly and efficiently."
      }
    ]
  },
  testimonials: {
    title: "See what people are saying ",
    titleSpan: "about my work",
    statsTitle: "1,000+ Happy Clients",
    statsSubtitle: "Work With People And Brands Worldwide.",
    clientImages: [profileImg, profileImg, profileImg],
    reviews: [
      {
        id: 1,
        rating: 4,
        text: "I'm a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-projects. I'm a designer, illustrator, We begin by understanding your vision.",
        author: "Jenny Wilson",
        role: "Web Designer",
        avatar: profileImg
      },
      {
        id: 2,
        rating: 5,
        text: "Working with this team has been a game-changer for our brand. Their attention to detail and creative approach is world-class. Highly recommended for any professional project.",
        author: "Robert Fox",
        role: "Project Manager",
        avatar: profileImg
      },
      {
        id: 3,
        rating: 5,
        text: "The structured workflow and clear communication made the entire process seamless. The final result exceeded our expectations in every possible way. Truly fantastic work.",
        author: "Kristin Watson",
        role: "Startup Founder",
        avatar: profileImg
      }
    ],
    brands: [
      { name: "Adobe", icon: SiAdobe },
      { name: "Figma", icon: SiFigma },
      { name: "Google", icon: SiGoogle },
      { name: "Netflix", icon: SiNetflix },
      { name: "Slack", icon: SiSlack },
      { name: "Spotify", icon: SiSpotify }
    ]
  },
  contact: {
    title: "Let's Work Together",
    // titleSpan: "next project",
    description: "Have a project in mind? Ready to explore what is possible? I am available for project engagements, consultations, and strategic collaborations. Get in touch and let's talk.",
    info: [
      {
        icon: HiOutlinePhone,
        label: 'Phone Number',
        value: '+234 916 349 7296',
        href: 'tel:+2349163497296',
      },
      {
        icon: HiOutlineMail,
        label: 'Email Address',
        value: 'devgabriel009@gmail.com',
        href: 'mailto:info@domain.com',
      },
      {
        icon: HiOutlineLocationMarker,
        label: 'Office Address',
        value: '2972 Westheimer Rd. Santa Ana,\nNew York, USA',
        href: null,
      }
    ]
  },
  footer: {
    heading: "READY TO WORK WITH US?",
    subheading: "Partner with our design agency for your business with amazing results.",
    ctaBadgeText: "GET STARTED NOW • GET STARTED NOW •",
    logo: logoDark,
    description: "Crafting intuitive, user-centric designs that bring ideas to life. With a passion for innovation and creativity, I help businesses and individuals.",
    socials: [
      { icon: FaDribbble, href: '#' },
      { icon: FaFacebookF, href: '#' },
      { icon: FaInstagram, href: '#' },
      { icon: FaLinkedinIn, href: '#' }
    ],
    links: {
      quickLinks: {
        title: "Quick Links",
        items: [
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/about' },
          { name: 'Services', href: '/services' },
          { name: 'Portfolio', href: '/portfolio' }
        ]
      },
      services: {
        title: "Our Services",
        items: [
          { name: 'Mobile App Design', href: '#' },
          { name: 'Branding And Visual Identity', href: '#' },
          { name: 'Consultation And Strategy', href: '#' },
          { name: 'UI/UX Design System Creation', href: '#' }
        ]
      },
      viewMyWork: {
        title: "View My Work",
        items: [
          { name: 'Behance', href: '#' },
          { name: 'Dribbble', href: '#' },
          { name: 'Upwork', href: '#' },
          { name: 'Fiverr', href: '#' }
        ]
      }
    },
    copyright: "All Rights Reserved."
  },
  
  // Page Banners & specific Page strings
  pages: {
    about: {
      bannerTitle: "About ",
      bannerTitleSpan: "Us",
      breadcrumbStart: "Home",
      breadcrumbEnd: "About Us"
    },
    services: {
      bannerTitle: "Our ",
      bannerTitleSpan: "Services",
      breadcrumbStart: "Home",
      breadcrumbEnd: "Services",
      badge: "My Specialization",
      headerTitle: "Innovative best design and ",
      headerTitleSpan: "development services",
      headerDescription: "As a skilled Product Designer and Developer, I offer a range of services tailored to help you create exceptional digital products and experiences."
    },
    portfolio: {
      bannerTitle: "Our ",
      bannerTitleSpan: "Portfolio",
      breadcrumbStart: "Home",
      breadcrumbEnd: "Portfolio",
      categories: ["All", "UI / UX Design", "Web Design", "Web Development"]
    },
    contact: {
      bannerTitle: "Contact ",
      bannerTitleSpan: "Us",
      breadcrumbStart: "Home",
      breadcrumbEnd: "Contact Us"
    }
  },

  aboutApproach: {
    title: "Designing success with a strategic ",
    titleSpan: "framework",
    approaches: [
      {
          title: "Our Mission",
          desc: "To deliver precision-engineered digital solutions across every layer of a client's business — from web and mobile development to AI automation, cybersecurity, and marketing — with the consistency and strategic depth that only a dedicated professional can provide."
      },
      {
          title: "Our Vision",
          desc: "To be the most trusted digital solutions professional in Africa — building technology that empowers businesses to compete globally, not just locally."
      },
      {
          title: "Our Goal",
          desc: "To work with 1000 forward-thinking businesses across Africa by 2027, helping each one build a stronger digital presence, operate more efficiently, and grow revenue through technology that actually works."
      }
    ],
    stats: [
        { value: "10+", label: "Services Delivered" },
        { value: "3+", label: "Years of Experience" },
        { value: "100%", label: "Clients-Focused" },
        { value: "2", label: "Country Served" }
    ]
  },

  aboutFeatures: {
    title: "Showcasing excellence through my ",
    titleSpan: "specialized services",
    description: "I offer a rare combination of custom software development and strategic real estate advisory. Whether you need to scale your online presence or identify high-yield investment properties in Nigeria, my structured methodology ensures precision, speed, and profitability.",
    buttonText: "Get In Touch",
    features: [
        {
            title: "Custom Web Engineering",
            desc: "Engineering high-performance web applications using React, Node.js, and modern tools to automate workflows and drive conversions."
        },
        {
            title: "Strategic Property Advisory",
            desc: "Expert guidance in real estate acquisitions, property analysis, and wealth creation across Nigeria's dynamic real estate sector."
        },
        {
            title: "User-Centric Design",
            desc: "Designing clean, responsive, and accessible interfaces that engage users and optimize their digital experience."
        }
    ]
  },

  aboutTools: {
    title: "Design, develop, deliver: my ",
    titleSpan: "essential gear",
    tools: [
        {
            name: "React.js",
            type: "Frontend Engineering",
            percentage: 95
        },
        {
            name: "JavaScript / TypeScript",
            type: "Core Programming",
            percentage: 92
        },
        {
            name: "TailwindCSS",
            type: "UI / Styling Systems",
            percentage: 95
        },
        {
            name: "Figma",
            type: "UI/UX & Prototyping",
            percentage: 90
        },
        {
            name: "Node.js & Express",
            type: "Backend APIs & Databases",
            percentage: 85
        },
        {
            name: "Real Estate Consulting",
            type: "Valuation, Markets & Negotiation",
            percentage: 90
        }
    ]
  },

  aboutExpertise: {
    badgeValue: "12+",
    badgeLabelPart1: "Years",
    badgeLabelPart2: "Experience",
    title: "Mastering creativity across ",
    titleSpan: "diverse projects",
    description: "I excel in delivering innovative and tailored creative solutions, showcasing expertise across diverse projects to meet unique client needs and exceed expectations.",
    expertise: [
        {
            title: "UI/UX Design",
            percentage: 90
        },
        {
            title: "Web Development",
            percentage: 95
        },
        {
            title: "Content Creation",
            percentage: 85
        },
        {
            title: "Real Estate Consulting",
            percentage: 90
        }
    ]
  },

  aboutFaq: {
    ctaTitle: "You have different questions? Ask Away!",
    ctaSubtitle: "Work With People And Brands Worldwide.",
    ctaButton: "Contact Us Now",
    faqs: [
        {
            question: "Do you work with international clients?",
            answer: "Yes. I work with clients across Nigeria, the African continent, and internationally. All engagements are managed remotely with structured communication, regular updates, and full transparency throughout."
        },
        {
            question: "How long does a typical project take?",
            answer: "Yes. I work with clients across Nigeria, the African continent, and internationally. All engagements are managed remotely with structured communication, regular updates, and full transparency throughout."
        },
        {
            question: "How does your payment structure work?",
            answer: "I work with staged milestone payments. You pay in phases tied to agreed deliverables not all upfront. This keeps the project structured and aligned with value delivered at each stage."
        },
        {
            question: "Can you handle multiple digital needs in one engagement?",
            answer: "Yes, and that is often the most efficient approach. When branding, web development, and marketing are designed together from the outset, the result is more cohesive and more effective than projects stitched together from separate specialists."
        },
        {
            question: "What industries have you worked in?",
            answer: "I have delivered projects across real estate, fintech, e-commerce, logistics, professional services, healthcare, and education — with particular depth in the Nigerian and broader African market."
        }
    ]
  }
}
