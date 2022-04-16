const Device = require('../database/models/device');
const Category = require('../database/models/category');


class DeviceRepository {

  async add(device) {
    try {
      return await Device.create(device);

    } catch (error) {
      console.log('Error save device' + error);
    }
  }

  async getById(deviceId) {
    try {
      return await Device.findAll(
        {
          where: {
            id: deviceId
          }
        }
      );

    } catch (error) {
      console.log('Error id device' + error);
    }
  }

  async filter(filterName) {
    try {
      if (filterName) {
        return await Device.findAll(
          {
            where: {
              name: filterName
            }
          }
        );
      } else {
        return await Device.findAll({ include: [{ model: Category }] })
      }
    } catch (error) {
      console.log('Error filter device');
    }
  }

  async update(device) {
    try {
      return deviceUpdate = await Device.save(device);
    } catch (error) {
      console.log('Error update device');
    }

  }

  async delete(id) {
    try {
      return await Device.destroy(
        { where: id }
      );
    } catch (error) {
      console.log('Error delete device');
    }
  }
}

module.exports = DeviceRepository