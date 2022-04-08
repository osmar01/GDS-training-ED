const Device = require('../database/models/device');

class DeviceRepository {

  async save(device) {
    try {
      return await Device.create(device);

    } catch (error) {
      console.log('Error save device');
    }
  }

  async listAll() {
    try {
      return await Device.findAll();

    } catch (error) {
      console.log('Error listAll device');
    }
  }

  async filter(filter) {
    try {
      return await Device.findAll(
        { where: filter }
      );
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