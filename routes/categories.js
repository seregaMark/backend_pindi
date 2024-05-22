const categoriesRouter = require('express').Router();

const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controlles/categories')
const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require('../middlewares/categories')

categoriesRouter.get(
    '/categories', 
    findAllCategories, 
    sendAllCategories
)
categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    createCategory,
    sendCategoryCreated
);
categoriesRouter.get(
    '/categories/:id', 
    findCategoryById, 
    sendCategoryById
)
categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    updateCategory,
    sendCategoryUpdated
);
categoriesRouter.delete(
    "/categories/:id", 
    deleteCategory, 
    sendCategoryDeleted
);

module.exports = categoriesRouter;
