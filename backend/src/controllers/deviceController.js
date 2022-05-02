

const DeviceRepository = require('../repositories/deviceRepository');
const { createResponseContent, createResponseErrors } = require('../utils/responseBuilder')




class DeviceController {
  async filter(request, response) {
    try {
      const deviceRepository = new DeviceRepository();

      const parametros = request.query;

      const devices = await deviceRepository.filter(parametros.name);
      console.log(devices);

      const devicesLinks = devices.map(device => {
        return {
          ...device.dataValues,
          links: [
            {
              rel: 'self',
              uri: `http://localhost:3333/device/${device.id}`,
              type: 'GET'
            }
          ]
        }
      })

      const responseContent = createResponseContent(devicesLinks)

      return response.status(200).json(responseContent)
    } catch (error) {
      const responseErrors = createResponseErrors([error.message])

      return response.status(400).json(responseErrors)
    }
  }

  async getById(request, response) {
    try {
      const deviceRepository = new DeviceRepository();
      
      const id = request.params.id

      const device = await deviceRepository.getById(parseInt(id));

      const deviceLinks = device.map(device => {
        return {
          ...device.dataValues,
          links: [
            {
              rel: 'self',
              uri: `http://localhost:3333/device/${device.id}`,
              type: 'GET'
            },
            {
              rel: 'delete',
              uri: `http://localhost:3333/device/${device.id}`,
              type: 'DELETE'
            }
          ]
        }
      })

      const responseContent = createResponseContent(deviceLinks)
      return response.status(200).json(responseContent)

    } catch (error) {

      const responseErrors = createResponseErrors([error.message])
      return response.status(400).json(responseErrors)
    }
  }

  async create(request, response) {
    try {
      const deviceRepository = new DeviceRepository();
      
      const device = request.body

      console.log(device);
      const deviceResponse = await deviceRepository.add(device);

      console.log(deviceResponse);
      
      const responseContent = createResponseContent(deviceResponse)
      return response.status(201).json(responseContent)

    } catch (error) {

      const responseErrors = createResponseErrors([error.message])
      return response.status(400).json(responseErrors)
    }
  }
  
  async update(request, response) { }
  
  async delete(request, response) {
    try {
      const deviceRepository = new DeviceRepository();

      const categoryId = request.params.id

      const deviceResponse = await deviceRepository.delete(parseInt(categoryId));

      const responseContent = createResponseContent(deviceResponse)
      return response.status(202).json(responseContent)

    } catch (error) {

      const responseErrors = createResponseErrors([error.message])
      return response.status(400).json(responseErrors)
    }
  }

}

module.exports = new DeviceController()