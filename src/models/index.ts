import { Category } from "./category";
import { Project } from "./Project";

Category.hasMany(Project)

Project.belongsTo(Category)


export {
    Category,
    Project
}