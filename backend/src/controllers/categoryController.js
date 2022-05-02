
// const ResponseBuilder  = require('../utils/ResponseBuilder');
const CategoryRepository = require('../repositories/categoryRepository');
const { createResponseContent, createResponseErrors } = require('../utils/responseBuilder')

class CategoryController {
  
  async filter(request, response) {
    
    try {
      const categoryRepository = new CategoryRepository();
      const parametros = request.query;
      
      const categories = await categoryRepository.filter(parametros.name);

      const categoriesLinks = categories.map(category => {
        return {
          ...category.dataValues,
          links: [
            {
              rel: 'self',
              uri: `http://localhost:3333/category/${category.id}`,
              type: 'GET'
            }
          ]
        }
      })

      const responseContent = createResponseContent(categoriesLinks)
      
      return response.status(200).json(responseContent)
    } catch (error) {
      const responseErrors = createResponseErrors([error.message])

      return response.status(400).json(responseErrors)
    }
  }

  async getById(request, response) {
    try {
      const categoryRepository = new CategoryRepository();
      
      const id = request.params.id

      const category = await categoryRepository.getById(parseInt(id));
      
      const categoryLinks = category.map(category => {
        return {
          ...category.dataValues,
          links: [
            {
              rel: 'self',
              uri: `http://localhost:3333/category/${category.id}`,
              type: 'GET'
            },
            {
              rel: 'delete',
              uri: `http://localhost:3333/category/${category.id}`,
              type: 'DELETE'
            }
          ]
        }
      })
      
      const responseContent = createResponseContent(categoryLinks)
      return response.status(200).json(responseContent)

    } catch (error) {
      
      const responseErrors = createResponseErrors([error.message])
      return response.status(400).json(responseErrors)
    }
  }

  async create(request, response) {
    try {
      const categoryRepository = new CategoryRepository();
      
      const category = request.body

      const categoryResponse = await categoryRepository.save(category);

      const responseContent = createResponseContent(categoryResponse)
      return response.status(201).json(responseContent)

    } catch (error) {

      const responseErrors = createResponseErrors([error.message])
      return response.status(400).json(responseErrors)
    }
  }
  
  async update(request, response) { }

  async delete(request, response) {
    try {
      const categoryRepository = new CategoryRepository();
      
      const categoryId = request.params.id

      const categoryResponse = await categoryRepository.delete(parseInt(categoryId));

      const responseContent = createResponseContent(categoryResponse)
      return response.status(202).json(responseContent)

    } catch (error) {

      const responseErrors = createResponseErrors([error.message])
      return response.status(400).json(responseErrors)
    }
  }

}

module.exports = new CategoryController()