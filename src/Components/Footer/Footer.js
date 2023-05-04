"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Footer.scss");
const Footer = () => {
    return (react_1.default.createElement("div", { className: 'footer' },
        react_1.default.createElement("div", null,
            "\u00A9 2023 Copyright:",
            react_1.default.createElement("a", { href: "layout/src#" }, "Click & Cook"))));
};
exports.default = Footer;
