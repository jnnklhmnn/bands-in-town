import React from 'react';
import Search from './Search.js';
import renderer from 'react-test-renderer';

test('Search should match Snapshot', () => {

    const component = renderer.create(
        <Search />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});