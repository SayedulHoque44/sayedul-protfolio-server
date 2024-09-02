"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyProfile = exports.UpdateUser = exports.loginUser = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const user_model_1 = require("./user.model");
exports.loginUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_model_1.UserModel.findOne({
        email: email
    });
    if (!user) {
        throw new Error("User Not Found");
    }
    if (password !== user.password) {
        throw new Error("Password didn't match!");
    }
    res.send({
        statusCode: 201,
        success: true,
        message: "Login Success",
        data: user,
    });
}));
exports.UpdateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params } = req;
    const user = yield user_model_1.UserModel.findByIdAndUpdate(params.id, body, { new: true });
    res.send({
        statusCode: 201,
        success: true,
        message: "User Updated Success",
        data: user,
    });
}));
exports.getMyProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const {body,params} = req
    const user = yield user_model_1.UserModel.findById("6696b69e28e9ecd8b5ea8a1e").select('-password');
    res.send({
        statusCode: 201,
        success: true,
        message: "User Retrive Success",
        data: user,
    });
}));
