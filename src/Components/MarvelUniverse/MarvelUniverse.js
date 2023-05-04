"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useApi_1 = __importDefault(require("../../api/useApi"));
const react_2 = require("react");
const HeroCard_1 = __importDefault(require("./HeroCard/HeroCard"));
require("./MarvelUniverse.scss");
const HeroDescription_1 = __importDefault(require("./HeroDescription/HeroDescription"));
const Loader_1 = __importDefault(require("../Loader/Loader"));
const MarvelUniverse = () => {
    const [data, setData] = (0, react_2.useState)(null);
    const [isLoading, setIsLoading] = (0, react_2.useState)(true);
    const [showLoader, setShowLoader] = (0, react_2.useState)(true);
    const [activeHero, setActiveHero] = (0, react_2.useState)(null);
    const [activeHeroData, setActiveHeroData] = (0, react_2.useState)(null);
    const [offset, setOffset] = (0, react_2.useState)(0);
    const api = (0, useApi_1.default)();
    (0, react_2.useEffect)(() => {
        api.getCharacters(offset, 20)
            .then(response => {
            if (offset > 0)
                setData([...data, ...response.data.results]);
            else
                setData(response.data.results);
            setIsLoading(false);
        })
            .catch(error => {
            console.log(error);
            alert('Error while fetching heroes list from Marvel API. Please check console');
            setIsLoading(false);
        });
    }, [offset]);
    (0, react_2.useEffect)(() => {
        if (activeHero) {
            api.getCharacter(activeHero)
                .then(response => {
                setActiveHeroData(response.data.results[0]);
            })
                .catch(error => {
                console.log(error);
                alert('Error while fetching hero info from Marvel API. Please check console');
            });
        }
    }, [activeHero]);
    (0, react_2.useEffect)(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 1000);
    }, [isLoading]);
    const renderHeroes = () => {
        if (data) {
            return (react_1.default.createElement("div", { className: 'main__heroesContainer' }, data.map((item) => {
                return react_1.default.createElement(HeroCard_1.default, { key: item.id, hero: item, onClick: (heroId) => setActiveHero(heroId), isActive: activeHero === item.id });
            })));
        }
        return null;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'main' },
            react_1.default.createElement("div", { className: 'main__heroDescriptionContainer' }, activeHeroData ? react_1.default.createElement(HeroDescription_1.default, { hero: activeHeroData }) : react_1.default.createElement("h2", null, "Choose hero")),
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", null, "Marvel Heroes"),
                renderHeroes(),
                react_1.default.createElement("button", { className: 'main__buttonMore', onClick: () => setOffset(offset + 20) }, "Show more"))),
        showLoader && react_1.default.createElement(Loader_1.default, { visibility: isLoading })));
};
exports.default = MarvelUniverse;
