import React from 'react';
import Error from './Error.js';
import renderer from 'react-test-renderer';

test('Error should match Snapshot', () => {
    const component = renderer.create(
        <Error/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});