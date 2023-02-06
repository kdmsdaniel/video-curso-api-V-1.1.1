const Categories = require('../models/categories.model');

class CategoriesServices {
  static async getCategories(){
    try {
      const result = await Categories.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async createCategories( category ){
    try {
      const result = await Categories.create( category );
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async deleteCategories( id ){
    try {
      const result = await Categories.destroy( {where: { id }} );
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = CategoriesServices;