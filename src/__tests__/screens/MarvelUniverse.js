"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const MarvelUniverse_1 = __importDefault(require("../../Components/MarvelUniverse/MarvelUniverse"));
it('renders correctly', () => {
    const tree = react_test_renderer_1.default.create(react_1.default.createElement(MarvelUniverse_1.default, null)).toJSON();
    expect(tree).toMatchSnapshot();
});
