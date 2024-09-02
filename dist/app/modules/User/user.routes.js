"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_services_1 = require("./user.services");
const router = express_1.default.Router();
router.post('/login', user_services_1.loginUser);
router.patch('/:id', user_services_1.UpdateUser);
router.get('/', user_services_1.getMyProfile);
exports.UserRoutes = router;
