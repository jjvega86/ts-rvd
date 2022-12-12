"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const robot_1 = __importDefault(require("./robot"));
let myRobot = new robot_1.default("Ryu", 50, 100);
console.log(myRobot.attackPower);
//# sourceMappingURL=index.js.map