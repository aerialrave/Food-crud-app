const { Sequelize } = require ('sequelize');

const sequelize = new Sequelize ({
  database: 'food_crud_db',
  dialect:'postgres',
  operatorsAliases: false
});

const Food = sequelize.define('food',{
  name: Sequelize.STRING,
  mealtime: Sequelize.STRING,
  calories: Sequelize.INTEGER,
  food_group: Sequelize.STRING
});



module.exports = {
sequelize,
Food
}
