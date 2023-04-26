 import type { JestConfigWithTsJest } from 'ts-jest';


 const jestConfig: JestConfigWithTsJest = {
     moduleFileExtensions: [
         "...defaults.moduleFileExtensions",
         "mts",
         "cts",
         "ts",
         "tsx",
         "js",
         "scss"
     ],
     moduleNameMapper: {
         "\\.(css|scss)$": "identity-obj-proxy",
         "\\.(svg)$": "<rootDir>/path/to/svg-loader.js",
         "axios": "axios/dist/node/axios.cjs"
     },
     transform: {
         "^.+\\.(js|ts)$": "babel-jest",
         "^.+\\.svg$": "<rootDir>/svg-transformer.js"
     },
     testMatch: ["**/__tests__/**/*.test.js"],
     preset: 'ts-jest',
     testEnvironment: 'jsdom',
     automock: false,
     verbose: true,
     setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
     transformIgnorePatterns: []
 }


 export default jestConfig;

