"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientControllers_1 = require("../Controllers/ClientControllers");
const routerC = (0, express_1.Router)();
routerC.post('/register', ClientControllers_1.registerClient); //register
routerC.post('/login', ClientControllers_1.loginClient); //login
routerC.get('/', ClientControllers_1.getClients); //getusers
routerC.get('/:id'); //get user by id
// routerC.get('/dashboard',getDashboard)//navigate to dashboard
routerC.patch('');
exports.default = routerC;
