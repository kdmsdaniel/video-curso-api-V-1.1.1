const CategoriesServices = require('../services/categories.service');

const getCategories = async ( req, res )=> {
  try {
    const result = await CategoriesServices.getCategories();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createCategories = async ( req, res )=> {
  try {
    const category = req.body;
    const result = await CategoriesServices.createCategories( category);
    res.json( result );
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteCategories = async ( req, res )=> {
  try {
    const{ id } = req.params;
    const result = await CategoriesServices.deleteCategories( id );
    res.json( result );
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { getCategories, createCategories,deleteCategories };