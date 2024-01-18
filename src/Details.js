// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import Csharp from "./assets/techstack/Csharp.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import ReactPlayer from "react-player";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import ClazyWeb from "./assets/projects/ClazyWeb.png";
import ClazyApp from "./assets/projects/ClazyApp.png";
import Forge from "./assets/projects/Forge.png";
import ClazyAll from "./assets/projects/ClazyAll.mp4";
import Forgevideo from "./assets/projects/Forge.mp4";
import WallDimension from "./assets/plugins/WallDimension.png";
import DrawDuct from "./assets/plugins/DrawDuct.png";
import ACH from "./assets/plugins/ACH.png";
import AICHATBOT from "./assets/plugins/AICHATBOT.png";
import AutoSwitches from "./assets/plugins/AutoSwitches.png";
import ClazyPlugin from "./assets/plugins/Clazy.png";
import AiVideo from "./assets/plugins/AiPlugin.mp4";
import AutoSwitchVideo from "./assets/plugins/Switch Plugin.mp4";
import WallDimensionVideo from "./assets/plugins/WallDimension.mp4";
import MVVMTASK from "./assets/projects/MVVMTASK.mp4";
import MVVMTASKimg from "./assets/projects/mvvmtaskImg.png";
import shoppingproject from "./assets/projects/shoppingproject.png";
import fm from "./assets/projects/fmproject.png";
import chatproject from "./assets/projects/chatproject.png";
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mohamed Etman",
  tagline: "I'm a Software Developer",
  img: profile,
  about: `I specialize in developing desktop applications using C# (WPF/XAML)`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mohamedalyetman/",
  github: "https://github.com/Mohamedetman1998",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Developer",
    Company: `ECG`,
    Location: "Egypt",
    Type: "Full Time",
    Duration: "Oct 2023 - Present",
  },
  {
    Position: "Software Engineer",
    Company: `BIM EXPERTS GmbH`,
    Location: "Austria",
    Type: "Remote",
    Duration: "Jan 2022 - Jan 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Software Development",
    Company: "Information technology institute",
    Location: "Egypt",
    Type: "Blended",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  Csharp: Csharp,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Chat Desktop Application",
    image: chatproject,
    description: `Chatting desktop application`,
    techstack: "C#/XAML/WPF/MVVM",
  },
  {
    title: "Fm Project Application",
    image: fm,
    description: `Radio project`,
    techstack: "C#/XAML/WPF/MVVM",
  },
  {
    title: "Shopping Desktop Application",
    image: shoppingproject,
    description: `Shopping desktop application`,
    techstack: "C#/XAML/WPF/MVVM",
  },
  {
    title: "Clazy Desktop Software & Website",
    image: ClazyApp,
    description: `Developed a comprehensive website and desktop software tailored to engineering company , facilitate Building Information Modeling (BIM) 
    coordination workflows, the desktop software uploads data to website through WebAPI`,
    techstack:
      "C#/XAML/WPF/MVVM/ASP.NET/MVC/Javascript/    HTML/CSS/Rest API and Web API",
    videoUrl: ClazyAll,
  },
  {
    title: "My final project for graduation",
    image: MVVMTASKimg,
    description: `This is my first project done on WPF/XAML using MVVM pattern. its a sample project for a school software`,
    techstack: "C#/XAML/WPF/MVVM",
    videoUrl: MVVMTASK,
  },
];

// export const addinDetails = [
//   {
//     title: "Ai Chatbot",
//     image: AICHATBOT,
//     description: `Integrate an AI-driven chatbot into your BIM workflow, providing intelligent assistance and streamlining communication for effective coordination.`,
//     techstack: "C#/XAML/WPF",
//     videoUrl: AiVideo,
//   },
//   {
//     title: "Wall Dimension",
//     image: WallDimension,
//     description: `Enhance precision in BIM projects with the Wall Dimension addin, simplifying the process of accurately measuring and documenting wall dimensions.`,
//     techstack: "C#/XAML/WPF",
//     videoUrl: WallDimensionVideo,
//   },
//   {
//     title: "Auto Switches",
//     image: AutoSwitches,
//     description: `Streamline electrical design in BIM with Auto Switches, an automation tool that intelligently places and configures switches for efficient electrical systems.`,
//     techstack: "C#/XAML/WPF",
//     videoUrl: AutoSwitchVideo,
//   },
//   {
//     title: "Draw Ducts From AutoCAD To Revit",
//     image: DrawDuct,
//     description: `Improve ductwork design efficiency by seamlessly drawing ducts from CAD models, ensuring accurate representation and enhanced collaboration in BIM projects.`,
//     techstack: "C#/XAML/WPF",
//   },
//   {
//     title: "Send Clashes Images To Clazy Website",
//     image: ClazyPlugin,
//     description: `Simplify clash detection and resolution by effortlessly sending clash images to a centralized website, facilitating collaboration and workflow optimization in BIM coordination.`,
//     techstack: "C#/XAML/WPF",
//   },
// ];
// Enter your Contact Details here
export const contactDetails = {
  email: "Mohamedetman603@gmail.com",
  phone: "+20 1099363811",
};
