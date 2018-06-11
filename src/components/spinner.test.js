import React from 'react';
import Spinner from './Spinner.js';
import renderer from 'react-test-renderer';

test('Spinner should match Snapshot', () => {
    const component = renderer.create(
        <Spinner />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});