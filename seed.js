const { Food } = require ('./models');

const run = async () => {

  const data =[
    {
      name:'pizza',
      food_group: 'junk',
      mealtime: 'dinner',
      calories: 2000
    },
    {
      name:'falafel',
      food_group: 'vegetable',
      mealtime: 'lunch',
      calories: 500
    }
  ];

const foods = await Food.bulkCreate(data);
console.log(`${foods.length} foods created`);
process.exit();

};

run();
