"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routerU = (0, express_1.Router)();
routerU.post('/register'); //register
routerU.post('/login'); //login
routerU.get('/'); //getusers
routerU.get('/:id'); //get user by id
routerU.get('/dashboard'); //navigate to dashboard
routerU.get('/check'); //check role
routerU.patch('');
exports.default = routerU;
