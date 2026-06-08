import { Router } from 'express';


import AccountController from '../controller/AccountControllers.js';


const rotaControleCad = Router();


rotaControleCad.post('/accounts', AccountController.Cadastro);


export default rotaControleCad;