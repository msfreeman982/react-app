import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    automock: false,
    setupFiles: [
        "./setupTests.js"
    ]
};

export default config;

