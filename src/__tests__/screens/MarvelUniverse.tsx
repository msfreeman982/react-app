import React from 'react';
import renderer from 'react-test-renderer';
import MarvelUniverse from '../../Components/MarvelUniverse/MarvelUniverse';

it('renders correctly', () => {
    const tree = renderer.create(<MarvelUniverse />).toJSON();
    expect(tree).toMatchSnapshot();
});