const { Router } = require('express');
const contactController = require('../controller/ContactControllers');
const rotaControle = Router();
rotaControle.post('/contacts', contactController.ReceberForm);
module.exports = rotaControle;