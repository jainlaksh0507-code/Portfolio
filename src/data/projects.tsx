import AceTernityLogo from "@/components/logos/aceternity";
// import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowDownUpIcon,
  ArrowUpRight,
  ExternalLink,
  Link2,
  MoveUpRight,

} from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import { ReactNode, } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiGoogleplay,
  SiApple,
  SiReact,
  SiRedux,
  SiRazorpay,
  SiGooglemaps,
  SiStripe,
  SiCoinbase,
  SiGoogleadsense,
  SiPaypal,
  SiFigma,
  SiCanva, SiFramer, SiInvision, SiSketch, SiAdobexd

} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({
  live,
  repo,
  playStore,
  appStore,
  apkDownload,
}: {
  live?: string;
  repo?: string;
  playStore?: string;
  appStore?: string;
  apkDownload?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8 flex-wrap">
      {playStore && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={playStore}
        >
          <Button variant={"default"} size={"sm"}>
            Play Store
            <SiGoogleplay className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {appStore && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={appStore}
        >
          <Button variant={"default"} size={"sm"}>
            App Store
            <SiApple className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {apkDownload && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={apkDownload}
        >
          <Button variant={"default"} size={"sm"}>
            Download APK
            <ArrowDownUpIcon className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {

  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  googleplay: {
    title: "Google Play",
    bg: "black",
    fg: "white",
    icon: <SiGoogleplay />,
  },

  reactNative: {
    title: "React Native",
    bg: "black",
    fg: "white",
    icon: <SiReact />,
  },

  redux: {
    title: "Redux",
    bg: "black",
    fg: "white",
    icon: <SiRedux />,
  },

  razorpay: {
    title: "Razorpay",
    bg: "black",
    fg: "white",
    icon: <SiRazorpay />,
  },

  mapIntegration: {
    title: "Map Integration",
    bg: "black",
    fg: "white",
    icon: <SiGooglemaps />,
  },

  stripe: {
    title: "Stripe",
    bg: "black",
    fg: "white",
    icon: <SiStripe />,
  },
  coinbase: {
    title: "Coinbase",
    bg: "black",
    fg: "white",
    icon: <SiCoinbase />,
  },

  rtk: {
    title: "RTK Query",
    bg: "black",
    fg: "white",
    icon: <SiRedux />,
  },

  ads: {
    title: "Ads Integration",
    bg: "black",
    fg: "white",
    icon: <SiGoogleadsense />,
  },

  paypal: {
    title: "Paypal",
    bg: "black",
    fg: "white",
    icon: <SiPaypal />,
  },
  figma: {
    title: "Figma",
    bg: "#1F1F1F",
    fg: "#FFFFFF",
    icon: <SiFigma />,
  },

  uiDesign: {
    title: "UI Design",
    bg: "#E0F7FA",
    fg: "#006064",
    icon: <SiAdobexd />,
  },

  uxResearch: {
    title: "UX Research",
    bg: "#FFF3E0",
    fg: "#E65100",
    icon: <SiSketch />,
  },

  wireframing: {
    title: "Wireframing",
    bg: "#F3E5F5",
    fg: "#6A1B9A",
    icon: <SiInvision />,
  },

  prototyping: {
    title: "Prototyping",
    bg: "#E8F5E9",
    fg: "#1B5E20",
    icon: <SiFramer />,
  },

  designSystems: {
    title: "Design Systems",
    bg: "#E3F2FD",
    fg: "#0D47A1",
    icon: <SiCanva />,
  },
};
export type Project = {

  id: string;
  type: "mobile" | "web";
  category: string;
  title: string;
  src: string;
  video: string;
  screenshots: string[];
  skills: { design: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  playStore?: string;
  appStore?: string;
  apkDownload?: string;
  live?: string;
  github?: string;
  intigrationTechnologies?: string[];
};
const projects: Project[] = [
  // +Food Delivery App
  //   {
  //     // 01. AI Docker file optimizer project
  //     id: "Fabrico Laundry App",
  //     category: "Designed a App for tier 1 & 2 cities",
  //     title: "FabricoLaundryApp",
  //     src: "/assets/projects-screenshots/supraa/supraa.jpeg",
  //     screenshots: ["1.png", "2.png", "3.png"],
  //     intigrationTechnologies: [
  //   "Figma UI/UX Design",
  //   "Wireframing & Prototyping",
  //   "Design Systems & Components",
  //   "User Flow & Journey Mapping",
  //   "Interactive Prototypes (Figma)",
  //   "Collaboration with Developers & Stakeholders",
  // ],

  // skills: {
  //   design: [
  //     PROJECT_SKILLS.figma,
  //     PROJECT_SKILLS.uiDesign,
  //     PROJECT_SKILLS.uxResearch,
  //     PROJECT_SKILLS.wireframing,
  //     PROJECT_SKILLS.prototyping,
  //     PROJECT_SKILLS.designSystems,
  //   ],
  //       backend: [],
  //     },
  //     video: "/assets/projects-screenshots/supraa/supraa.mp4",
  //     playStore: "https://play.google.com/store/apps/details?id=com.supraa",
  //     appStore: "https://apps.apple.com/in/app/supraa/id6743932127",
  //     // apkDownload:
  //     //   "https://play.google.com/store/apps/details?id=com.supraa.supraa",

  //     get content() {
  //       return (
  //         <div>
  //           <TypographyP className="font-mono ">
  //             Supraa is a grocery and food delivery app that allows users to order
  //             food from their favorite restaurants and have it delivered to their
  //             doorstep.
  //             <br />
  //           </TypographyP>

  //           <TypographyH3 className="my-4 mt-8">
  //             App Architecture Flow
  //           </TypographyH3>
  //           <p className="font-mono mb-2">
  //             The app architecture flow is as follows:
  //             <br />
  //             1.User can login and signup using email and password.
  //             <br />
  //             2.User can view the list of restaurants and food items.
  //             <br />
  //             3.User can add food items to the cart and place an order.
  //             <br />
  //             4.User can view the order status and track the delivery.
  //             <br />
  //           </p>

  //           <TypographyH3 className="my-4 mt-8">
  //             Intigration Technologies
  //           </TypographyH3>
  //           <p className="font-mono mb-2">
  //             The intigration technologies are as follows:
  //             <br />
  //             {this.intigrationTechnologies?.map((tech, index) => (
  //               <p key={index} className="font-mono mb-2">
  //                 {index + 1}. {tech}
  //               </p>
  //             ))}
  //           </p>

  //           <ProjectsLinks
  //             playStore={this.playStore}
  //             appStore={this.appStore}
  //             apkDownload={this.apkDownload}
  //           />
  //           {/* <SlideShow
  //             images={[{ image : `${BASE_PATH}/aidockerfileoptimizer/1.png` , title : "AI Dockerfile Optimizer" },
  //               { image : `${BASE_PATH}/aidockerfileoptimizer/2.png` , title : "AI Dockerfile Optimizer" },
  //               { image : `${BASE_PATH}/aidockerfileoptimizer/3.png` , title : "AI Dockerfile Optimizer" },
  //             ]}
  //           /> */}
  //         </div>
  //       );
  //     },
  //   },

  {
    id: "Fabrico-Laundry-App",
    type: "mobile",
    category: "Designed an app for Tier 1 & Tier 2 cities",
    title: "FabricoLaundryApp",
    live: "https://www.figma.com/design/Pn5FAQwvqHwzYQTnOXTWDG/Laundry-app?node-id=0-1&p=f",
    src: "/assets/projects-screenshots/fabrico/fabrico.png",
    screenshots: ["1.png", "2.png", "3.png"],

    intigrationTechnologies: [
      "Figma UI/UX Design",
      "Wireframing & Prototyping",
      "Design Systems & Components",
      "User Flow & Journey Mapping",
      "Interactive Prototypes (Figma)",
      "Collaboration with Developers & Stakeholders",
    ],

    skills: {
      design: [
        PROJECT_SKILLS.figma,
        PROJECT_SKILLS.uiDesign,
        PROJECT_SKILLS.uxResearch,
        PROJECT_SKILLS.wireframing,
        PROJECT_SKILLS.prototyping,
        PROJECT_SKILLS.designSystems,
      ],
      backend: [],
    },

    video: "",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Fabrico is a laundry service mobile application designed for users in
            Tier 1 and Tier 2 cities. The app provides a seamless experience for
            booking laundry services, tracking orders, and ensuring timely delivery.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">
            Design Flow
          </TypographyH3>

          <p className="font-mono mb-2">
            1. User onboarding with simple and intuitive screens.
            <br />
            2. Browse laundry services and select required options.
            <br />
            3. Schedule pickup and delivery slots.
            <br />
            4. Real-time order tracking and status updates.
            <br />
            5. Smooth checkout and confirmation flow.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Design Tools & Technologies
          </TypographyH3>

          <div className="font-mono mb-2">
            {this.intigrationTechnologies?.map((tech, index) => (
              <p key={index}>
                {index + 1}. {tech}
              </p>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "dfurn-ui",
    type: "web",
    category: "Designed a Furniture Website",
    title: "Dfurn ",
    live: "https://dfurn.in",

    src: "/assets/projects-screenshots/dfurn/dfurn.png",
    screenshots: ["1.png", "2.png", "3.png"],

    intigrationTechnologies: [
      "Figma UI/UX Design",
      "Wireframing & Prototyping",
      "Design Systems & Components",
      "User Flow & Journey Mapping",
      "Responsive Web Design",
      "Developer Handoff using Figma Inspect",
    ],

    skills: {
      design: [
        PROJECT_SKILLS.figma,
        PROJECT_SKILLS.uiDesign,
        PROJECT_SKILLS.uxResearch,
        PROJECT_SKILLS.wireframing,
        PROJECT_SKILLS.prototyping,
        PROJECT_SKILLS.designSystems,
      ],
      backend: [],
    },

    video: "",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Dfurn is a modern furniture website UI design focused on delivering a
            premium browsing experience. The design emphasizes clean layouts,
            elegant typography, and seamless navigation for showcasing furniture products.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">
            Design Flow
          </TypographyH3>

          <p className="font-mono mb-2">
            1. Homepage with featured collections and categories.
            <br />
            2. Product listing with filters and sorting.
            <br />
            3. Detailed product pages with images & specifications.
            <br />
            4. Add to cart and smooth checkout flow.
            <br />
            5. Fully responsive design across devices.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Design Tools & Technologies
          </TypographyH3>

          <div className="font-mono mb-2">
            {this.intigrationTechnologies?.map((tech, index) => (
              <p key={index}>
                {index + 1}. {tech}
              </p>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "banyanroots-ui",
    type: "web",
    category: "Designed a Grocery Website",
    title: "Banyanroots ",

    live: "https://banyanroots.in",

    src: "/assets/projects-screenshots/banyanroots/banyanroots.png",
    screenshots: ["1.png", "2.png", "3.png"],

    intigrationTechnologies: [
      "Figma UI/UX Design",
      "Wireframing & Prototyping",
      "Design Systems & Components",
      "User Flow & Journey Mapping",
      "Responsive Web Design",
      "Developer Handoff using Figma Inspect",
    ],

    skills: {
      design: [
        PROJECT_SKILLS.figma,
        PROJECT_SKILLS.uiDesign,
        PROJECT_SKILLS.uxResearch,
        PROJECT_SKILLS.wireframing,
        PROJECT_SKILLS.prototyping,
        PROJECT_SKILLS.designSystems,
      ],
      backend: [],
    },

    video: "",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Banyanroots is a modern grocery website UI designed to simplify online
            grocery shopping. The design focuses on clean layouts, easy navigation,
            and a smooth user experience for browsing and purchasing daily essentials.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">
            Design Flow
          </TypographyH3>

          <p className="font-mono mb-2">
            1. Homepage with featured categories and offers.
            <br />
            2. Product listing with filters and search functionality.
            <br />
            3. Detailed product pages with pricing and descriptions.
            <br />
            4. Add to cart and seamless checkout experience.
            <br />
            5. Fully responsive design for desktop and mobile users.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Design Tools & Technologies
          </TypographyH3>

          <div className="font-mono mb-2">
            {this.intigrationTechnologies?.map((tech, index) => (
              <p key={index}>
                {index + 1}. {tech}
              </p>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "hey-concrete-ui",
    type: "web",
    category: "Designed a Wall Panel Website",
    title: "Hey Concrete ",

    live: "https://heyconcrete.com/",

    src: "/assets/projects-screenshots/heyconcrete/heyconcrete.png",
    screenshots: ["1.png", "2.png", "3.png"],

    intigrationTechnologies: [
      "Figma UI/UX Design",
      "Modern Website Layout Design",
      "Wireframing & Prototyping",
      "Product Showcase Design",
      "Landing Page Design",
      "Design Systems & Components",
      "Responsive Web Design (Desktop + Tablet)",
      "Client Collaboration & Iterations",
    ],

    skills: {
      design: [
        PROJECT_SKILLS.figma,
        PROJECT_SKILLS.uiDesign,
        PROJECT_SKILLS.uxResearch,
        PROJECT_SKILLS.wireframing,
        PROJECT_SKILLS.prototyping,
        PROJECT_SKILLS.designSystems,
      ],
      backend: [],
    },

    video: "",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Hey Concrete is a modern wall panel website designed to showcase premium
            interior solutions. The design focuses on clean aesthetics, product
            visibility, and a seamless browsing experience for users exploring wall
            panel options.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">
            Design Flow
          </TypographyH3>

          <p className="font-mono mb-2">
            1. Clean and minimal homepage highlighting premium wall panels.<br />
            2. Product listing section with categories and filtering options.<br />
            3. Detailed product pages with textures, finishes, and specifications.<br />
            4. Smooth navigation with modern UI components.<br />
            5. Contact and inquiry sections for lead generation.<br />
          </p>

          <TypographyH3 className="my-4 mt-8">
            Design Tools & Technologies
          </TypographyH3>

          <div className="font-mono mb-2">
            {this.intigrationTechnologies?.map((tech, index) => (
              <p key={index}>
                {index + 1}. {tech}
              </p>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "vedanta-law-ui",
    type: "web",
    category: "Designed a Law Firm Website",
    title: "Vedanta Law Chambers ",

    live: "https://vedantalawchambers.com/",

    src: "/assets/projects-screenshots/vedanta/vedanta.png",
    screenshots: ["1.png", "2.png", "3.png"],

    intigrationTechnologies: [
      "Figma UI/UX Design",
      "Professional Law Firm Layout",
      "Wireframing & Prototyping",
      "Service-Based Website Structure",
      "Typography & Color Strategy",
      "Responsive Web Design",
      "Client Requirement Analysis",
    ],

    skills: {
      design: [
        PROJECT_SKILLS.figma,
        PROJECT_SKILLS.uiDesign,
        PROJECT_SKILLS.uxResearch,
        PROJECT_SKILLS.wireframing,
        PROJECT_SKILLS.prototyping,
        PROJECT_SKILLS.designSystems,
      ],
      backend: [],
    },

    video: "",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Vedanta Law Chambers is a professional law firm website designed to
            reflect trust, authority, and clarity. The UI focuses on clean layouts,
            structured information, and easy navigation for legal services.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">
            Design Flow
          </TypographyH3>

          <p className="font-mono mb-2">
            1. Elegant homepage showcasing firm identity.<br />
            2. Services section with detailed legal expertise.<br />
            3. Attorney profiles and credibility sections.<br />
            4. Case studies and client trust elements.<br />
            5. Contact & consultation booking flow.<br />
          </p>

          <TypographyH3 className="my-4 mt-8">
            Design Tools & Technologies
          </TypographyH3>

          <div className="font-mono mb-2">
            {this.intigrationTechnologies?.map((tech, index) => (
              <p key={index}>{index + 1}. {tech}</p>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "rmc-ui",
    type: "web",
    category: "Designed a Corporate Website",
    title: "RMC India",

    live: "https://www.figma.com/",

    src: "/assets/projects-screenshots/rmc/rmc.png",
    screenshots: ["1.png", "2.png", "3.png"],

    intigrationTechnologies: [
      "Figma UI/UX Design",
      "Corporate Website Design",
      "Landing Page UI",
      "Wireframing & Prototyping",
      "Modern Grid Layout System",
      "Responsive Design",
      "Client Collaboration",
    ],

    skills: {
      design: [
        PROJECT_SKILLS.figma,
        PROJECT_SKILLS.uiDesign,
        PROJECT_SKILLS.uxResearch,
        PROJECT_SKILLS.wireframing,
        PROJECT_SKILLS.prototyping,
        PROJECT_SKILLS.designSystems,
      ],
      backend: [],
    },

    video: "",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            RMC is a corporate website designed to present company services,
            achievements, and business solutions in a structured and modern way.
            The focus was on clarity, professionalism, and brand consistency.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">
            Design Flow
          </TypographyH3>

          <p className="font-mono mb-2">
            1. Clean homepage with strong brand identity.<br />
            2. Services and offerings section.<br />
            3. About company and achievements.<br />
            4. Client testimonials and trust indicators.<br />
            5. Contact and inquiry sections.<br />
          </p>

          <TypographyH3 className="my-4 mt-8">
            Design Tools & Technologies
          </TypographyH3>

          <div className="font-mono mb-2">
            {this.intigrationTechnologies?.map((tech, index) => (
              <p key={index}>{index + 1}. {tech}</p>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "rmc-green-ui",
    type: "web",
    category: "Designed a Sustainable Website",
    title: "RMC Green ",

    live: "https://green.rmcindia.in/",

    src: "/assets/projects-screenshots/rmcgreen/rmcgreen.png",
    screenshots: ["1.png", "2.png", "3.png"],

    intigrationTechnologies: [
      "Figma UI/UX Design",
      "Eco-Friendly Theme Design",
      "Green Branding UI",
      "Wireframing & Prototyping",
      "Sustainable Design Approach",
      "Responsive Layout Design",
      "User-Centric Design",
    ],

    skills: {
      design: [
        PROJECT_SKILLS.figma,
        PROJECT_SKILLS.uiDesign,
        PROJECT_SKILLS.uxResearch,
        PROJECT_SKILLS.wireframing,
        PROJECT_SKILLS.prototyping,
        PROJECT_SKILLS.designSystems,
      ],
      backend: [],
    },

    video: "",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            RMC Green is a sustainability-focused website designed with a modern
            eco-friendly approach. The UI emphasizes green branding, clean layouts,
            and a smooth user experience aligned with environmental values.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">
            Design Flow
          </TypographyH3>

          <p className="font-mono mb-2">
            1. Nature-inspired homepage design.<br />
            2. Sustainable services showcase.<br />
            3. Informational sections about eco practices.<br />
            4. Clean and minimal UI for readability.<br />
            5. Contact and engagement flow.<br />
          </p>

          <TypographyH3 className="my-4 mt-8">
            Design Tools & Technologies
          </TypographyH3>

          <div className="font-mono mb-2">
            {this.intigrationTechnologies?.map((tech, index) => (
              <p key={index}>{index + 1}. {tech}</p>
            ))}
          </div>
        </div>
      );
    },
  },
  // +Club Automation App
  // {
  //   // 01. AI Docker file optimizer project
  //   id: "elpico",
  //   category: "Club Automation App",
  //   title: "ElPico Social",
  //   src: "/assets/projects-screenshots/elpico/elpico.jpeg",
  //   screenshots: ["1.png", "2.png", "3.png"],
  //   intigrationTechnologies: [
  //     "React Native Map Integration",
  //     "Stripe Payment Gateway",
  //     "Coinbase Crypto Payment Gateway",
  //     "RTK API Integration",
  //     "Google Maps API Integration",
  //     "React Native Firebase Notifications",
  //     "React Native Firebase Messaging",
  //     "FaceID and TouchID Authentication",
  //   ],

  //   skills: {
  //     design: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.reactNative,
  //       PROJECT_SKILLS.firebase,
  //       PROJECT_SKILLS.redux,
  //       PROJECT_SKILLS.mapIntegration,
  //       PROJECT_SKILLS.stripe,
  //       PROJECT_SKILLS.coinbase,
  //       PROJECT_SKILLS.rtk,
  //     ],
  //     backend: [],
  //   },
  //   video: "/assets/projects-screenshots/elpico/elpico.mp4",
  //   // playStore: "https://play.google.com/store/apps/details?id=com.supraa",
  //   // appStore: "https://apps.apple.com/in/app/supraa/id6743932127",
  //   apkDownload:
  //     "https://www.dropbox.com/scl/fi/uxqj90fnwvu6fgafx9hsg/Elpico.apk?rlkey=14juza0qcjjrcxnafsam02cln&st=veo2ueof&dl=0",

  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           ElPico Social is a club automation app that allows members to book
  //           space slots, event tickets, and services from the club.
  //           <br />
  //         </TypographyP>

  //         <TypographyH3 className="my-4 mt-8">
  //           App Architecture Flow
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           The app architecture flow is as follows:
  //           <br />
  //           1. Only Club Members can login and signup using member ID and
  //           password.
  //           <br />
  //           2. Member can book space slots eg. Conference Room, Meeting Room,
  //           Private Room, etc.
  //           <br />
  //           3. Member can book event tickets for the events.
  //           <br />
  //           4. Member can book services from the club eg. Catering, Audio
  //           Visual, etc.
  //           <br />
  //           5. Member can pay Payment using 3 methods Stripe, Coinbase, and Pay
  //           later.
  //           <br />
  //         </p>

  //         <TypographyH3 className="my-4 mt-8">
  //           Intigration Technologies
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           The intigration technologies are as follows:
  //           <br />
  //           {this.intigrationTechnologies?.map((tech, index) => (
  //             <p key={index} className="font-mono mb-2">
  //               {index + 1}. {tech}
  //             </p>
  //           ))}
  //         </p>

  //         <ProjectsLinks
  //           playStore={this.playStore}
  //           appStore={this.appStore}
  //           apkDownload={this.apkDownload}
  //         />
  //         {/* <SlideShow
  //           images={[{ image : `${BASE_PATH}/aidockerfileoptimizer/1.png` , title : "AI Dockerfile Optimizer" },
  //             { image : `${BASE_PATH}/aidockerfileoptimizer/2.png` , title : "AI Dockerfile Optimizer" },
  //             { image : `${BASE_PATH}/aidockerfileoptimizer/3.png` , title : "AI Dockerfile Optimizer" },
  //           ]}
  //         /> */}
  //       </div>
  //     );
  //   },
  // },

  // // +Social Media App
  // {
  //   // 01. AI Docker file optimizer project
  //   id: "myflama",
  //   category: "Social Media App",
  //   title: "MyFlama",
  //   src: "/assets/projects-screenshots/myflama/myFlama.jpeg",
  //   screenshots: ["1.png", "2.png", "3.png"],
  //   intigrationTechnologies: [
  //     "React Native Map Integration",
  //     "Ads Integration",
  //     "RTK API Integration",
  //     "Google Maps API Integration",
  //     "React Native Firebase Notifications",
  //     "React Native Firebase Messaging",
  //     "Google Auth Integration",
  //   ],

  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.reactNative,
  //       PROJECT_SKILLS.firebase,
  //       PROJECT_SKILLS.redux,
  //       PROJECT_SKILLS.mapIntegration,
  //       PROJECT_SKILLS.ads,
  //       PROJECT_SKILLS.rtk,
  //     ],
  //     backend: [],
  //   },
  //   video: "/assets/projects-screenshots/myflama/MyFlama.mp4",
  //   // playStore: "https://play.google.com/store/apps/details?id=com.supraa",
  //   // appStore: "https://apps.apple.com/in/app/supraa/id6743932127",
  //   apkDownload:
  //     "https://www.dropbox.com/scl/fi/odx7cl2effd51qjlks2h7/MyFlama.apk?rlkey=lybny6zj36baodn8z5g6fiyyh&st=5axgeq64&dl=0",

  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           MyFlama is a social media app that allows users to share their
  //           posts, short videos, and comments with their friends and family.
  //           <br />
  //         </TypographyP>

  //         <TypographyH3 className="my-4 mt-8">
  //           App Architecture Flow
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           The app architecture flow is as follows:
  //           <br />
  //           1. User can login and signup using email and password.
  //           <br />
  //           2. User can view the list of posts , short videos and comments.
  //           <br />
  //           3. User can like and comment on the posts and short videos.
  //           <br />
  //           4. User can share the posts and short videos on social media.
  //           <br />
  //           5. User Can follow and unfollow the users.
  //           <br />
  //           6. User can view the list of users and their posts.
  //           <br />
  //           7. Users can chat with each other and share the posts and short
  //           videos.
  //           <br />
  //           8. user can see live location of the users.
  //         </p>

  //         <TypographyH3 className="my-4 mt-8">
  //           Intigration Technologies
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           The intigration technologies are as follows:
  //           <br />
  //           {this.intigrationTechnologies?.map((tech, index) => (
  //             <p key={index} className="font-mono mb-2">
  //               {index + 1}. {tech}
  //             </p>
  //           ))}
  //         </p>

  //         <ProjectsLinks
  //           playStore={this.playStore}
  //           appStore={this.appStore}
  //           apkDownload={this.apkDownload}
  //         />
  //         {/* <SlideShow
  //           images={[{ image : `${BASE_PATH}/aidockerfileoptimizer/1.png` , title : "AI Dockerfile Optimizer" },
  //             { image : `${BASE_PATH}/aidockerfileoptimizer/2.png` , title : "AI Dockerfile Optimizer" },
  //             { image : `${BASE_PATH}/aidockerfileoptimizer/3.png` , title : "AI Dockerfile Optimizer" },
  //           ]}
  //         /> */}
  //       </div>
  //     );
  //   },
  // },

  // // 01. BigValue Traveler project
  // {
  //   id: "bigValue",
  //   category: "Travel and Tourism App",
  //   title: "BigValue Travels",
  //   src: "/assets/projects-screenshots/bigvalue/bigValue.jpeg",
  //   screenshots: ["1.png", "2.png", "3.png"],
  //   intigrationTechnologies: [
  //     "Localization (English, Spanish, Arabic) translation integration",
  //     "Thromolex and Riya API Integration for hotel and flight data",
  //     "In-App Live Currency Converter (USD, EUR, GBP, INR)",
  //     "Razorpay , Paypal , Cashfree Payment Gateway Integration",
  //     "React Native Firebase Notifications",
  //     "React Native Firebase Messaging",
  //   ],

  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.reactNative,
  //       PROJECT_SKILLS.razorpay,
  //       PROJECT_SKILLS.redux,
  //       PROJECT_SKILLS.paypal,
  //       PROJECT_SKILLS.firebase,
  //       PROJECT_SKILLS.rtk,
  //     ],
  //     backend: [],
  //   },
  //   video: "/assets/projects-screenshots/bigvalue/bigValue.mp4",
  //   // playStore: "https://play.google.com/store/apps/details?id=com.supraa",
  //   // appStore: "https://apps.apple.com/in/app/supraa/id6743932127",
  //   apkDownload:
  //     "https://www.dropbox.com/scl/fi/4701562yuvzelehetqf4f/BigValue.apk?rlkey=s7ctnix91nkjymjdgkx1mob0t&st=rhfa21sg&dl=0",

  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           BigValue Travels is a travel and tourism app that allows users to
  //           book flight tickets, hotel, car rental, and tour packages for their
  //           trip.
  //           <br />
  //         </TypographyP>

  //         <TypographyH3 className="my-4 mt-8">
  //           App Architecture Flow
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           The app architecture flow is as follows:
  //           <br />
  //           1. User can login and signup using email and password.
  //           <br />
  //           2. User can book tree type flight tickets (One way, Round trip,
  //           Multi-city).
  //           <br />
  //           3. User can Directly full trip Packages (Hotel + Flight + Car) or
  //           (Flight + Hotel) for turist destinations.
  //           <br />
  //           4. User can view list of car and book car for the trip (SUV , Sedan
  //           , Hatchback , etc.).
  //           <br />
  //           5. User can view list of hotels and book hotel for the trip (Hotel ,
  //           Resort , etc.).
  //           <br />
  //           6. user can Payment uinsg Razorpay , Paypal , Cashfree Payment
  //           Gateway.
  //           <br />
  //           7. User can view list of tour packages and book tour package for the
  //           trip.
  //         </p>

  //         <TypographyH3 className="my-4 mt-8">
  //           Intigration Technologies
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           The intigration technologies are as follows:
  //           <br />
  //           {this.intigrationTechnologies?.map((tech, index) => (
  //             <p key={index} className="font-mono mb-2">
  //               {index + 1}. {tech}
  //             </p>
  //           ))}
  //         </p>

  //         <ProjectsLinks
  //           playStore={this.playStore}
  //           appStore={this.appStore}
  //           apkDownload={this.apkDownload}
  //         />
  //         {/* <SlideShow
  //           images={[{ image : `${BASE_PATH}/aidockerfileoptimizer/1.png` , title : "AI Dockerfile Optimizer" },
  //             { image : `${BASE_PATH}/aidockerfileoptimizer/2.png` , title : "AI Dockerfile Optimizer" },
  //             { image : `${BASE_PATH}/aidockerfileoptimizer/3.png` , title : "AI Dockerfile Optimizer" },
  //           ]}
  //         /> */}
  //       </div>
  //     );
  //   },
  // },

  // // +E-commerce App
  // {
  //   // 01. BigValue Traveler project
  //   id: "peclick",
  //   category: "Agency Management App",
  //   title: "Peclick Agency",
  //   src: "/assets/projects-screenshots/peclicke/peclicke.jpeg",
  //   screenshots: ["1.png", "2.png", "3.png"],
  //   intigrationTechnologies: [
  //     "RTK API Integration",
  //     "React Native Firebase Notifications",
  //     "React Native Firebase Messaging",
  //   ],

  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.reactNative,
  //       PROJECT_SKILLS.firebase,
  //       PROJECT_SKILLS.redux,
  //       PROJECT_SKILLS.rtk,
  //     ],
  //     backend: [],
  //   },
  //   video: "/assets/projects-screenshots/peclicke/peclicke.mp4",
  //   playStore:
  //     "https://play.google.com/store/apps/details?id=com.peclickagency",
  //   // appStore: "https://apps.apple.com/in/app/supraa/id6743932127",
  //   // apkDownload:
  //   //   "https://play.google.com/store/apps/details?id=com.supraa.supraa",

  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Peclick Agency is a agency management app that allows agency to
  //           manage their orders , products , categories , brands , users ,
  //           messages , notifications , reviews , ratings.
  //           <br />
  //         </TypographyP>

  //         <TypographyH3 className="my-4 mt-8">
  //           App Architecture Flow
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           The app architecture flow is as follows:
  //           <br />
  //           1. Agency can login using email and password.
  //           <br />
  //           2. on the home page agency can share statics total orders , total
  //           revenue , total products , total categories , total brands , total
  //           users , total messages , total notifications , total reviews , total
  //           ratings , total products , total categories , total brands , total
  //           users , total messages , total notifications , total reviews , total
  //           ratings.
  //           <br />
  //           3. Agency can view list of orders , products , categories , brands ,
  //           users , messages , notifications , reviews , ratings.
  //           <br />
  //           4. Agency can view list report of orders , products , categories ,
  //           brands , users , messages , notifications , reviews , ratings.
  //           <br />
  //           5. Agency can Details of Seller and Outlet.
  //           <br />
  //         </p>

  //         <TypographyH3 className="my-4 mt-8">
  //           Intigration Technologies
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           The intigration technologies are as follows:
  //           <br />
  //           {this.intigrationTechnologies?.map((tech, index) => (
  //             <p key={index} className="font-mono mb-2">
  //               {index + 1}. {tech}
  //             </p>
  //           ))}
  //         </p>

  //         <ProjectsLinks
  //           playStore={this.playStore}
  //           appStore={this.appStore}
  //           apkDownload={this.apkDownload}
  //         />
  //         {/* <SlideShow
  //           images={[{ image : `${BASE_PATH}/aidockerfileoptimizer/1.png` , title : "AI Dockerfile Optimizer" },
  //             { image : `${BASE_PATH}/aidockerfileoptimizer/2.png` , title : "AI Dockerfile Optimizer" },
  //             { image : `${BASE_PATH}/aidockerfileoptimizer/3.png` , title : "AI Dockerfile Optimizer" },
  //           ]}
  //         /> */}
  //       </div>
  //     );
  //   },
  // },
];
export default projects;
