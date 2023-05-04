"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const marvel_logo_svg_1 = require("./marvel-logo.svg");
const Loader = ({ visibility }) => {
    return (react_1.default.createElement("div", { className: `loader ${visibility ? '' : 'loader_hidden'}` },
        react_1.default.createElement(marvel_logo_svg_1.ReactComponent, null)));
};
exports.default = Loader;
