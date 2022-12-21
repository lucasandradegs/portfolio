import express from 'express'
import { authController } from './controllers/authController'
import { categoriesController } from './controllers/categoriesController'
import { projectsController } from './controllers/projectsController'
import { videosController } from './controllers/videosController'

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

router.get('/projects/featured', projectsController.featured)
router.get('/projects/newest', projectsController.newest)
router.get('/projects/search', projectsController.search)
router.get('/projects/:id', projectsController.show)

router.get('/videos/stream', videosController.stream)
export { router }