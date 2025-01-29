"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MyUserController_1 = __importDefault(require("../components/MyUserController"));
const router = express_1.default.Router();
router.post("/", MyUserController_1.default.createCurrentUser);
exports.default = router;
