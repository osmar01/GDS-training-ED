const CategoryRoutes = require('./routes/categoryRoutes.js')
const DeviceRoutes = require('./routes/DeviceRoutes')

const registerRoutes = app => {
  app.use('/category', CategoryRoutes);
  app.use('/device', DeviceRoutes);
}

module.exports = { registerRoutes }