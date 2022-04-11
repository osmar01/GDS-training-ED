

const DeviceRepository = require('./repositories/deviceRepository');
const CategoryRepository = require('./repositories/CategoryRepository');


async function main() {

  const deviceRepository = new DeviceRepository();

  // const { id } = await  deviceRepository.add(
  //   {
  //     name: 'aparelho5',
  //     category_id: 1,
  //     color: 'branco',
  //     partNumber: 2020
  //   }
  // );

  const devices = await deviceRepository.listAll();
  console.log(devices);


}

main();