"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const useApi_1 = __importDefault(require("../api/useApi"));
const mockCharacters = {
    data: {
        results: [
            { id: 1, name: 'Iron Man' },
            { id: 2, name: 'Captain America' },
            { id: 3, name: 'Thor' },
        ],
    },
};
const mockCharacter = {
    data: {
        results: [{ id: 1, name: 'Iron Man' }],
    },
};
describe('useApi', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });
    afterEach(() => {
        global.fetch.mockClear();
        delete global.fetch;
    });
    it('should fetch characters from the API', () => __awaiter(void 0, void 0, void 0, function* () {
        global.fetch.mockResolvedValueOnce({
            json: () => __awaiter(void 0, void 0, void 0, function* () { return mockCharacters; }),
        });
        const { result } = (0, react_1.renderHook)(() => (0, useApi_1.default)());
        const characters = yield result.current.getCharacters();
        expect(characters.data.results).toEqual(mockCharacters.data.results);
    }));
    it('should fetch a character from the API', () => __awaiter(void 0, void 0, void 0, function* () {
        global.fetch.mockResolvedValueOnce({
            json: () => __awaiter(void 0, void 0, void 0, function* () { return mockCharacters; }),
        });
        const { result } = (0, react_1.renderHook)(() => (0, useApi_1.default)());
        const characters = yield result.current.getCharacters();
        expect(characters.data.results[0]).toEqual(mockCharacter.data.results[0]);
    }));
});
