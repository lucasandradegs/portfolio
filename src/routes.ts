import express from 'express'
import { authController } from './controllers/authController'
import { categoriesController } from './controllers/categoriesController'
import { favoritesController } from './controllers/favoritesController'
import { projectsController } from './controllers/projectsController'
import { videosController } from './controllers/videosController'
import { ensureAuth, ensureAuthViaQuery } from './middlewares/auth'

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/categories', ensureAuth, categoriesController.index)
router.get('/categories/:id',ensureAuth, categoriesController.show)

router.get('/projects/featured', ensureAuth, projectsController.featured)
router.get('/projects/newest', projectsController.newest)
router.get('/projects/search', ensureAuth, projectsController.search)
router.get('/projects/:id', ensureAuth, projectsController.show)

router.get('/videos/stream', ensureAuthViaQuery, videosController.stream)

router.post('/favorites', ensureAuth, favoritesController.save)

export { router }