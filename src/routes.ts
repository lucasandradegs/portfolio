import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { projectsController } from './controllers/projectsController'

const router = express.Router()

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

router.get('/projects/featured', projectsController.featured)
router.get('/projects/newest', projectsController.newest)
router.get('/projects/search', projectsController.search)
router.get('/projects/:id', projectsController.show)

export { router }