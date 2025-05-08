
const express = require('express');
const deleteController = require('../controller/deleteController');

const deleteRouter = express.Router();


deleteRouter.delete('/upload/:id/:cloudId', deleteController);


module.exports = deleteRouter