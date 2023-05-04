"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Header.scss");
const logo_svg_1 = require("../images/logo.svg");
function Header() {
    return (react_1.default.createElement("div", { className: "header" },
        react_1.default.createElement(logo_svg_1.ReactComponent, { className: 'header__logo' })));
}
exports.default = Header;
