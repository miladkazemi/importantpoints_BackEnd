import { Sequelize, DataTypes } from 'sequelize'
import config from '../config/config.js'

// init Sequelize
const sequelize = new Sequelize(config.DBNAME, config.USERNAME, config.PASSWORD, {
  host: config.HOSTNAME,
  dialect: 'mysql'
});

const Points = sequelize.define('points', {
  name: {type: DataTypes.STRING},
  description: {type: DataTypes.STRING},
  photo: {type: DataTypes.STRING},
  categoryType: {type: DataTypes.ENUM('religious', 'governmental', 'hospital', 'hotel', 'recreational', )},
  open: {type: DataTypes.TINYINT},
}, {
  timestamps: false
});

const Categories = sequelize.define('categories', {
  name: {type: DataTypes.STRING},
  description: {type: DataTypes.STRING},
  photo: {type: DataTypes.STRING},
  type: {type: DataTypes.ENUM('religious', 'governmental', 'hospital', 'hotel', 'recreational', )},
}, {
  timestamps: false
});


// Use the following command to create tables once : 
// sequelize.sync({ force: false });  // update change db




export default  {
  sequelize: sequelize,
  Points: Points,
  Categories: Categories,
}