// thoda zada ts ho gya idhar
export enum SkillNames {
  GIT = "git",
  HTML = "html",
  CSS = "css",
  // JS = "js",
  // TS = "ts",
  // REACT = "react",
  // NODEJS = "nodejs",
  // EXPRESS = "express",
  // MONGODB = "mongodb",
  GITHUB = "github",
  // FIREBASE = "firebase",
  // React Native Skills
  // REACT_NATIVE = "react_native",
  // EXPO = "expo",
  // ANDROID = "android",
  // IOS = "ios",
  // REACT_NAVIGATION = "react_navigation",
  // ASYNC_STORAGE = "async_storage",
  // REDUX = "redux",
  // MOBX = "mobx",
  // STYLED_COMPONENTS = "styled_components",
  // NATIVE_BASE = "native_base",
  // ANDROID_STUDIO = "android_studio",
  // XCODE = "xcode",
  FIGMA = "figma",
  CANVA = "canva",
  ADOBE = "adobe",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.FIGMA]: {
  id: 50,
  name: "figma",
  label: "Figma",
  shortDescription: "designing clean UI/UX like a pro 🎨✨",
  color: "#a259ff",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
},

[SkillNames.CANVA]: {
  id: 51,
  name: "canva",
  label: "Canva",
  shortDescription: "quick designs that still look fire 🔥",
  color: "#00c4cc",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
},

[SkillNames.ADOBE]: {
  id: 52,
  name: "adobe",
  label: "Adobe",
  shortDescription: "creative tools for next-level design 🚀",
  color: "#ff0000",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
},
  // React Native Skills
  // [SkillNames.REACT_NATIVE]: {
  //   id: 25,
  //   name: "react_native",
  //   label: "React Native",
  //   shortDescription:
  //     "write once, deploy everywhere, and it actually works! 📱⚡",
  //   color: "#61dafb",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  // },
  // [SkillNames.EXPO]: {
  //   id: 26,
  //   name: "expo",
  //   label: "Expo",
  //   shortDescription: "React Native but make it EZ mode, no cap! 🎯📲",
  //   color: "#000020",
  //   icon: "https://static.cdnlogo.com/logos/e/72/expo-go-app.svg",
  // },
  // [SkillNames.ANDROID]: {
  //   id: 27,
  //   name: "android",
  //   label: "Android",
  //   shortDescription: "green robot army dominating the mobile world! 🤖💚",
  //   color: "#3ddc84",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  // },
  // [SkillNames.IOS]: {
  //   id: 28,
  //   name: "ios",
  //   label: "iOS",
  //   shortDescription: "the bougie cousin of mobile platforms, periodt! 🍎✨",
  //   color: "#000000",
  //   icon: "https://static.cdnlogo.com/logos/a/19/apple.svg",
  // },
  // [SkillNames.ANDROID_STUDIO]: {
  //   id: 35,
  //   name: "android_studio",
  //   label: "Android Studio",
  //   shortDescription: "the IDE that eats RAM like it's a free buffet! 🍽️💾",
  //   color: "#3ddc84",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  // },
  // [SkillNames.XCODE]: {
  //   id: 36,
  //   name: "xcode",
  //   label: "Xcode",
  //   shortDescription:
  //     "Apple's gift to developers... when it's not crashing! 🍎💻",
  //   color: "#147efb",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg",
  // },

  // [SkillNames.REACT_NAVIGATION]: {
  //   id: 29,
  //   name: "react_navigation",
  //   label: "React Navigation",
  //   shortDescription: "routing in RN that doesn't make you cry! 🗺️🎉",
  //   color: "#6c47ff",
  //   icon: "https://reactnavigation.org/img/spiro.svg",
  // },
  // [SkillNames.ASYNC_STORAGE]: {
  //   id: 30,
  //   name: "async_storage",
  //   label: "AsyncStorage",
  //   shortDescription: "local storage but make it mobile, bestie! 💾📱",
  //   color: "#61dafb",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  // },
  // [SkillNames.REDUX]: {
  //   id: 31,
  //   name: "redux",
  //   label: "Redux",
  //   shortDescription:
  //     "state management that's got more drama than reality TV! 🎭🔄",
  //   color: "#764abc",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  // },

  // [SkillNames.STYLED_COMPONENTS]: {
  //   id: 34,
  //   name: "rtk_query",
  //   label: " RTK Query",
  //   shortDescription: "component library that's got that clean aesthetic! 🧱✨",
  //   color: "#00d4aa",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  // },

  // [SkillNames.FIREBASE]: {
  //   id: 17,
  //   name: "firebase",
  //   label: "Firebase",
  //   shortDescription:
  //     "your app's ultimate wingman, but watch out, vendor lock-in vibes! 🔥👌",
  //   color: "#ffca28",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  // },

  // [SkillNames.NATIVE_BASE]: {
  //   id: 34,
  //   name: "add_mob",
  //   label: " Add Mob",
  //   shortDescription: "component library that's got that clean aesthetic! 🧱✨",
  //   color: "#00d4aa",
  //   icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google-admob.svg",
  // },

  // [SkillNames.MOBX]: {
  //   id: 36,
  //   name: "oauth",
  //   label: " OAuth",
  //   shortDescription: "component library that's got that clean aesthetic! 🧱✨",
  //   color: "#00d4aa",
  //   icon: "https://cdn.tutsplus.com/mobile/uploads/2013/09/Google-OAuth@2x.png",
  // },

  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/github-light.svg",
  },

  // [SkillNames.JS]: {
  //   id: 1,
  //   name: "js",
  //   label: "JavaScript",
  //   shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
  //   color: "#f0db4f",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  // },
  // [SkillNames.TS]: {
  //   id: 2,
  //   name: "ts",
  //   label: "TypeScript",
  //   shortDescription:
  //     "JavaScript's overachieving cousin who's always flexing 💯🔒",
  //   color: "#007acc",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  // },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
//   [SkillNames.REACT]: {
//     id: 5,
//     name: "react",
//     label: "React",
//     shortDescription: `"use using" 
// using use = useUsing("use")`,
//     color: "#61dafb",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   },

  // [SkillNames.NODEJS]: {
  //   id: 9,
  //   name: "nodejs",
  //   label: "Node.js",
  //   shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
  //   color: "#6cc24a",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  // },
  // [SkillNames.EXPRESS]: {
  //   id: 10,
  //   name: "express",
  //   label: "Express",
  //   shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
  //   color: "#fff",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  // },

  // [SkillNames.MONGODB]: {
  //   id: 12,
  //   name: "mongodb",
  //   label: "MongoDB",
  //   shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
  //   color: "#336791",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  // },
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
