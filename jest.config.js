module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.svg$": "<rootDir>/src/__mocks__/svgrMock.js",
    },
    setupFilesAfterEnv: [
        "@testing-library/react/cleanup-after-each",
        "@testing-library/jest-dom/extend-expect",
    ],
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.test.json",
            diagnostics: false,
        },
    },
};

