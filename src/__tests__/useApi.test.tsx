import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
    fetchMock.resetMocks();
});

test('throws an error if empty object', () => {
    fetchMock.mockResponseOnce(JSON.stringify([{ id: 1 }]));

    const onResponse = jest.fn( () => {
        return fetchMock(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b654ca88e860833a320a418837b8c8d7&hash=1e38e95972e560a073674d6102216c0b`)
            .then(response => response.json())
            .finally(() => {
                expect(onResponse).toHaveBeenCalledTimes(0);
            })
    })
});


// test('returns result if array', () => {
//     fetch.mockResponseOnce(JSON.stringify([{ id: 1 }]));
//     const onResponse = jest.fn();
//     const onError = jest.fn();
//     const api = useApi.getCharacter<any>;
//     return api()
//         .then(onResponse)
//         .catch(onError)
//         .finally(() => {
//             expect(onResponse).toHaveBeenCalled();
//             expect(onError).not.toHaveBeenCalled();
//
//             expect(onResponse.mock.calls[0][0][0]).toEqual({ id: 1 });
//         });
// });