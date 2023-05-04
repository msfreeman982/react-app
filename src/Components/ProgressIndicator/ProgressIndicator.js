"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./ProgressIndicator.css");
const ProgressIndicator = ({ steps }) => {
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("ul", { className: "progressbar" }, steps.map((step, index) => (react_1.default.createElement("li", { key: index, className: `${step.completed ? "completed" : ""} ${index === 0 ? "active" : ""}` },
            react_1.default.createElement("span", null, step.name),
            step.substeps && (react_1.default.createElement("div", { className: "substeps" },
                react_1.default.createElement("div", { className: "substeps-row" }, [...Array(step.substeps)].map((_, i) => (react_1.default.createElement("div", { key: i, className: "slider-handle" })))))),
            index !== steps.length - 1 && (react_1.default.createElement("div", { className: "progressbar-line" }))))))));
};
exports.default = ProgressIndicator;
