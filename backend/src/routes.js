const CategoryRoutes = require('./routes/categoryRoutes.js')
const DeviceRoutes = require('./routes/deviceRoutes.js')

const registerRoutes = app => {
  app.use('/category', CategoryRoutes);
  app.use('/device', DeviceRoutes);
}

module.exports = { registerRoutes }