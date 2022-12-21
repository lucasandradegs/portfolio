import { Category } from "./category";
import { Project } from "./Project";
import { Video } from "./video";
import { Favorite } from "./favorite";
import { User } from "./user";

Category.hasMany(Project, { as: 'projects' })

Project.belongsTo(Category)
Project.belongsToMany(User, { through: Favorite })
Project.hasMany(Video, { as: 'videos' })
Project.hasMany(Favorite, { as: 'FavoritesUsers', foreignKey: 'project_id' })

Video.belongsTo(Project)

Favorite.belongsTo(Project)
Favorite.belongsTo(User)

User.belongsToMany(Project, { through: Favorite })
User.hasMany(Favorite, { as: 'FavoritesProjects', foreignKey: 'user_id' })

export {
    Category,
    Project,
    Video,
    Favorite,
    User
}