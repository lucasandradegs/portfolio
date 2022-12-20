import { Category } from "./category";
import { Project } from "./Project";
import { Video } from "./video";
import { User } from "./user";

Category.hasMany(Project, { as: 'projects' })

Project.belongsTo(Category)
Project.hasMany(Video, { as: 'videos' })

Video.belongsTo(Project)

export {
    Category,
    Project,
    Video,
    User
}