"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const HeroCard_1 = __importDefault(require("../Components/MarvelUniverse/HeroCard/HeroCard"));
describe("HeroCard", () => {
    const hero = {
        id: 1,
        name: "Spider-Man",
        thumbnail: {
            path: "http://example.com/spiderman",
            extension: "jpg"
        }
    };
    const onClick = jest.fn();
    afterEach(() => {
        onClick.mockClear();
    });
    it("should render the hero name", () => {
        const { getByText } = (0, react_2.render)(react_1.default.createElement(HeroCard_1.default, { hero: hero, onClick: onClick }));
        expect(getByText(hero.name)).toBeInTheDocument();
    });
    it("should call onClick when clicked", () => {
        const { getByRole } = (0, react_2.render)(react_1.default.createElement(HeroCard_1.default, { hero: hero, onClick: onClick }));
        react_2.fireEvent.click(getByRole("button"));
        expect(onClick).toHaveBeenCalledWith(hero.id);
    });
    it("should add the active class when isActive is true", () => {
        const { container } = (0, react_2.render)(react_1.default.createElement(HeroCard_1.default, { hero: hero, onClick: onClick, isActive: true }));
        expect(container.firstChild).toHaveClass("heroCard_active");
    });
    it("should not add the active class when isActive is false", () => {
        const { container } = (0, react_2.render)(react_1.default.createElement(HeroCard_1.default, { hero: hero, onClick: onClick, isActive: false }));
        expect(container.firstChild).not.toHaveClass("heroCard_active");
    });
});
