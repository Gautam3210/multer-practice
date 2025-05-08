const personModel = require("../module/db_config");

const getController = async (req, res) => {
  const personData = await personModel.find({});
  res.json(personData);
};


module.exports = getController