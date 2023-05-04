"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./HeroCard.scss");
const HeroCard = ({ hero, onClick, isActive }) => {
    var _a, _b;
    return (react_1.default.createElement("div", { className: `heroCard ${isActive ? 'heroCard_active' : ''}`, onClick: () => onClick(hero.id), role: "button" },
        react_1.default.createElement("div", { className: 'heroCard__image' },
            react_1.default.createElement("img", { src: `${(_a = hero.thumbnail) === null || _a === void 0 ? void 0 : _a.path}.${(_b = hero.thumbnail) === null || _b === void 0 ? void 0 : _b.extension}`, alt: 'hero image' })),
        react_1.default.createElement("div", { className: 'heroCard__name' }, hero.name)));
};
exports.default = HeroCard;
