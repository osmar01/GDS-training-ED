const Category = require('../database/models/category');

class CategoryRepository {

  async save(category) {
    try {
      return await Category.create(category);

    } catch (error) {
      console.log('Error create category');
    }
  }

  async listAll() {
    try {
      return await Category.findAll();

    } catch (error) {
      console.log('Error list All category');
    }
  }

  async filter(filterName) {
    try {
      if (filterName) {
        return await Category.findAll(
          {
            where: {
              name: filterName
            }
          }
        );
      } else {
        return await Category.findAll();
      }
    } catch (error) {
      console.log('Error filter category');
    }
  }
  async getById(id) {
    try {
      return await Category.findAll(
        {
          where: {
            id: id
          }
        }
      );
    } catch (error) {
      console.log('Error id category');
    }
  }

  async update(category) {
    try {
      return categoryUpdate = await Category.save(category);
    } catch (error) {
      console.log('Error update category');
    }

  }

  async delete(id) {
    try {
      return await Category.destroy(
        {
          where:
            { id: id }
        }
      );
    } catch (error) {
      console.log('Error delete category');
    }
  }
}

module.exports = CategoryRepository