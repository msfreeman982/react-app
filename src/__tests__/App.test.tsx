import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
// import React from 'react';
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MarvelUniverse from '../Components/MarvelUniverse/MarvelUniverse';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
afterEach(cleanup);

test('type text into input, and  display search results', async () => {
    // our test searchString
    const searchString = 'syd';

    // Render App
    const { getByLabelText, queryByLabelText, debug } = render(<MarvelUniverse />);

    // find the input
    const btn: HTMLElement = getByLabelText('btn');

    // search panel should not be rendered at this point
    // expect(queryByLabelText('btn')).not.toBeInTheDocument();

    // this fire the onChange event and set the value to 'syd'
    fireEvent.change(btn, { target: { value: searchString } });

    // useFetch should be called to get data
    expect(mockedAxios.get).toHaveBeenCalled();

    // search panel is loaded in the document
    // expect(queryByLabelText('search-panel')).toBeInTheDocument();

    // wait for search results to be rendered
    await waitFor(() => {
        expect(queryByLabelText('desc')).toBeInTheDocument();
    });

    // OPTIONAL: view in terminal to see rendered html
    // debug();
});
