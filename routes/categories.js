const categoriesRouter = require('express').Router();

const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated } = require('../controlles/categories')
const { findAllCategories, createCategory, findCategoryById, updateCategory } = require('../middlewares/categories')

categoriesRouter.get('/categories', findAllCategories, sendAllCategories)
categoriesRouter.post('/categories', createCategory, sendCategoryCreated)
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById)
categoriesRouter.put("/categories/:id", updateCategory, sendCategoryUpdated);

module.exports = categoriesRouter;
