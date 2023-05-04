"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./HeroDescription.scss");
const HeroDescription = ({ hero }) => {
    return (react_1.default.createElement("div", { className: 'heroDescription' },
        react_1.default.createElement("div", { className: 'heroDescription__image' },
            react_1.default.createElement("img", { src: `${hero.thumbnail.path}.${hero.thumbnail.extension}`, alt: 'hero image' })),
        react_1.default.createElement("div", { className: 'heroDescription__name' }, hero.name),
        react_1.default.createElement("div", { className: 'heroDescription__description' }, hero.description || 'no description'),
        hero.comics.items.length > 0 &&
            react_1.default.createElement("div", { className: 'heroDescription__comics' },
                react_1.default.createElement("h3", { className: 'heroDescription__series__title' }, "Comics:"),
                hero.comics.items.map((item) => {
                    return react_1.default.createElement("div", { key: item.name }, item.name);
                })),
        hero.series.items.length > 0 &&
            react_1.default.createElement("div", { className: 'heroDescription__series' },
                react_1.default.createElement("h3", { className: 'heroDescription__series__title' }, "Series:"),
                hero.series.items.map((item) => {
                    return react_1.default.createElement("div", { key: item.name }, item.name);
                }))));
};
exports.default = HeroDescription;
