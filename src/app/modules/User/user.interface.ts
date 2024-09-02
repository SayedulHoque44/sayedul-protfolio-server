export type TUser = {
  name: string;
  email: string;
  password: string;
  image: string;
  banner: string;
  title: string;
  bio: string;
  about: string;
  address: string;
  resumeLink: string;
  gitLink: string;
  phonenumber: string;
  linkedin: string;
  videoDemo: string;
  skills: TSKills[];
  projects: TProject[];
  experience: TExperience[];
  education: TEducation[];
};

export type TSKills = {
  name: string;
  url: string;
  category: "Language" | "Frontend" | "Backend & Database" | "Tools";
};
export type TProject = {
  name: string;
  category: string; // Latest | Full-Stack | Frontend
  description: string;
  liveLink: string;
  gitLink: string;
  usedTechnlogy: string;
  videoDemo: string;
  demo: {
    url: string;
    title: string;
    description: string;
  }[];
};

export type TEducation = {
  institution: string;
  title: string;
  date: string;
  status: string; // in present | Completed
};

export type TExperience = {
  position: string;
  companyName: string;
  companyLogo: string;
  companyAddress: string;
  type: string;
  date: string;
  description: string;
};
