import AdminJS, { PageHandler } from "adminjs"
import { Category, Project, Video, User } from "../models"

export const dashboardOptions: {
    handler?: PageHandler
    component?: string
} = {
    component: AdminJS.bundle("./components/Dashboard"),
    handler: async (req, res, context) => {
        const projects = await Project.count()
        const videos = await Video.count()
        const categories = await Category.count()
        const standartUsers = await User.count({ where: { role: 'user' } })

        res.json({
            'Projetos': projects,
            'Videos': videos,
            'Categorias': categories,
            'Usuários': standartUsers
        })
    }
}