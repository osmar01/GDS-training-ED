

const Device = require('./database/models/device');
const CategoryRepository = require('./repositories/CategoryRepository');

async function main() {

  const categoryRepository = new CategoryRepository();

  // await Device.sync( {force: true });
  // await Category.sync( {force: true });

  const { id } = await Device.create(
    {
      name: 'aparelho3',
      category_id: 1,
      color: 'branco',
      partNumber: 2020
    }
  );

// await categoryRepository.save({ name: 'aparelho5' });

}

main();