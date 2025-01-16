import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Junior studying Computer Science and Linguistics at the University of Maryland. I have experience programming in Python, Java, C, Assembly, OCaml, and C#. Through my internships and work, I have also gained knowledge of the .NET Framework, Figma, several APIs, HTML/CSS and Javascript.`;

export const ABOUT_TEXT = `Besides programming for university coursework or internships, I also enjoy solving problems on my own time. I have worked on a few of my own projects. Some of these are this very personal portfolio website, an image detection model that can differentiate between images of dogs and cats, and training a model to detect fake news, among others. I am passionate about coding but more importantly, on finding solutions to complex problems and making the world of technology more accessible to everyone.
In my free time, I enjoy being outdoors. I am an avid rock climber and I also love hiking, snowboarding, and going to the beach. Additionally, I read a lot, draw and play the guitar, piano, and violin. Additionally, as I enjoy language learning, besides speaking English and Tamil at home, I have previously studied Spanish and am now learning Hindi and French.`;

export const EXPERIENCES = [
  {
    year: "January 2025 - Present",
    role: "Incoming Research Assistant",
    company: "Language Acquisition Lab, UMD",
    description: `Examining the acquisition and development of syntactic, semantic, phonological and morphological knowledge in children. Much of the research involves cross-linguistic comparisons.`,
    technologies: ["Linguistics"],
  },
  {
    year: "January 2024 - August 2024",
    role: "Software Development Intern",
    company: "Wise Work",
    description: `Designed and engineered an informative mobile app for one of the world's tallest temples opening in Perth, Australia. Also, assisted in the development of a solution to have the Llama3 Model process and summarize 100,000 files to be used for cancer research. Lastly, created a Retrieval Augmented Generation solution with ChromaDB as the vector database.`,
    technologies: ["Python", "Figma", ".NET MAUI", "Flask"],
  },
  {
    year: "February 2024 - May 2024",
    role: "Research Assistant",
    company: "Autonomous Materials Discovery Laboratory",
    description: `Investigated how machine learning can accelerate the development of functional materials like biodegradable plastic. This was done by constructing a UI to label images as valid or invalid samples. It was then used by two research mentors to train a convolutional neural network.`,
    technologies: ["React", "JavaScript", "Google Drive API"],
  },
  {
    year: "May 2023 - August 2023",
    role: "Software Development Intern",
    company: "Hue Learn",
    description: `Developed and maintained web applications such as an AI ChatBot. Additionally designed and implemented RESTful APIs for data communication and collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Blazor Web Assembly", "React3Fiber", "OpenAI API", "Node.js"],
  },
];
{/*TO BE CHANGED*/}
export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  phoneNo: "+1 (973) 489-6009",
  email: "amudha.murali.krishnan@gmail.com",
};
