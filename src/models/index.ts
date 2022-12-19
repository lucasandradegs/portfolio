import { Category } from "./category";
import { Project } from "./Project";
import { Video } from "./video";

Category.hasMany(Project)

Project.belongsTo(Category)
Project.hasMany(Video)

Video.belongsTo(Project)

export {
    Category,
    Project,
    Video
}