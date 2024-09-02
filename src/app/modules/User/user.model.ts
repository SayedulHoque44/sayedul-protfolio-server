import { model, Schema } from "mongoose";
import {
  TEducation,
  TExperience,
  TProject,
  TSKills,
  TUser,
} from "./user.interface";

const SkillSchema = new Schema<TSKills>({
  name: String,
  url: String,
  category: String,
});

const demoSchema = new Schema({
  url: String,
  title: String,
  description: String,
});

const ProjectSchema = new Schema<TProject>(
  {
    name: String,
    category: String,
    description: String,
    liveLink: String,
    gitLink: String,
    usedTechnlogy: String,
    videoDemo: String,
    demo: [demoSchema],
  },
  { timestamps: true },
);

const EducationSchema = new Schema<TEducation>(
  {
    institution: String,
    title: String,
    date: String,
    status: String,
  },
  { timestamps: true },
);

const ExperienceSchema = new Schema<TExperience>(
  {
    position: String,
    companyName: String,
    companyLogo: String,
    companyAddress: String,
    type: String,
    date: String,
    description: String,
  },
  { timestamps: true },
);

const UserSchema = new Schema<TUser>(
  {
    name: String,
    email: String,
    password: String,
    image: String,
    banner: String,
    title: String,
    bio: String,
    about: String,
    address: String,
    resumeLink: String,
    gitLink: String,
    linkedin: String,
    phonenumber: String,
    videoDemo: String,
    skills: [SkillSchema],
    projects: [ProjectSchema],
    experience: [ExperienceSchema],
    education: [EducationSchema],
  },
  {
    timestamps: true,
  },
);

export const UserModel = model<TUser>("User", UserSchema);
