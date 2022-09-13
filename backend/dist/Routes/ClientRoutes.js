"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routerC = (0, express_1.Router)();
routerC.post('/register'); //register
routerC.post('/login'); //login
routerC.get('/'); //getusers
routerC.get('/:id'); //get user by id
routerC.get('/dashboard'); //navigate to dashboard
routerC.get('/check'); //check role
routerC.patch('');
exports.default = routerC;
