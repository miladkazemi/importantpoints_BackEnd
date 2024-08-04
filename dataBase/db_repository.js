import db_model from './db_model.js'
import responseAPI from '../utils/responseAPI.js'
import errorHandling from '../utils/errorHandling.js'



// __________________________________________________________________
// {----------------------------------------------------------------}
// |          {Public}          {Public}          {Public}          |
// {----------------------------------------------------------------}


const getCategories = async () => {
  const data = await db_model.Categories.findAll({
    raw: true
  });

  return responseAPI.standard(responseAPI.status(errorHandling.code_ok), data)
}

const getPoints = async (categoryType) => {
  const data = await db_model.Points.findAll({
    where: {
      categoryType: categoryType
    },
    raw: true
  });

  return responseAPI.standard(responseAPI.status(errorHandling.code_ok), data)
}






export default {
  // user
  getCategories: getCategories,
  getPoints: getPoints,

}





