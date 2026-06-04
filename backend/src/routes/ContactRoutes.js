
import { Router } from 'express';


import contactController from '../controller/ContactControllers.js';


const rotaControle = Router();


rotaControle.post('/contacts', contactController.ReceberForm);


export default rotaControle;