"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const SkillSchema = new mongoose_1.Schema({
    name: String,
    url: String,
    category: String,
});
const demoSchema = new mongoose_1.Schema({
    url: String,
    title: String,
    description: String,
});
const ProjectSchema = new mongoose_1.Schema({
    name: String,
    category: String,
    description: String,
    liveLink: String,
    gitLink: String,
    usedTechnlogy: String,
    videoDemo: String,
    demo: [demoSchema],
}, { timestamps: true });
const EducationSchema = new mongoose_1.Schema({
    institution: String,
    title: String,
    date: String,
    status: String,
}, { timestamps: true });
const ExperienceSchema = new mongoose_1.Schema({
    position: String,
    companyName: String,
    companyLogo: String,
    companyAddress: String,
    type: String,
    date: String,
    description: String,
}, { timestamps: true });
const UserSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
