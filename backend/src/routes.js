const CategoryRoutes = require('./routes/CategoryRoutes')
const DeviceRoutes = require('./routes/DeviceRoutes')

exports.registerRoutes = (app) => {
  app.use('/category', CategoryRoutes);
  app.use('/device', DeviceRoutes);
}