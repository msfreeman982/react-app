import React from "react";
import renderer from "react-test-renderer";
import MarvelUniverse from "../../Components/MarvelUniverse/MarvelUniverse"
import {act} from '@testing-library/react';

let wrapper:any;
it("snapshot", async () => {
    await act(async () => {
        wrapper = await renderer.create(<MarvelUniverse />);
    });

    await expect(wrapper.toJSON()).toMatchSnapshot();
});
