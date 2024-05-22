const categoriesRouter = require('express').Router();

const { sendAllCategories, sendCategoryCreated, sendCategoryById } = require('../controlles/categories')
const { findAllCategories, createCategory, findCategoryById } = require('../middlewares/categories')

categoriesRouter.get('/categories', findAllCategories, sendAllCategories)
categoriesRouter.post('/categories', createCategory, sendCategoryCreated)
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById)

module.exports = categoriesRouter;
