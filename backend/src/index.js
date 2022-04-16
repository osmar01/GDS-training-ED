const express = require('express');
// const DeviceRepository = require('./repositories/deviceRepository');
// const CategoryRepository = require('./repositories/CategoryRepository');

// async function main() {

//   const deviceRepository = new DeviceRepository();

//   const devices = await deviceRepository.listAll();
//   console.log(devices);


// }

// main();

const app = express();
app.use(express.json());

app.get('/devices', (request, response) => {
  return response.json({
    devices: [
      { name: 'aparelho 1', color: 'azul' },
      { name: 'aparelho 2', color: 'branco' },
      { name: 'aparelho 3', color: 'verde' },
    ]
  });
});

app.listen(3333, () => {
  console.log('server run');
});