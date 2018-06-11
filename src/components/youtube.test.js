import React from 'react';
import Youtube from './Youtube.js';
import renderer from 'react-test-renderer';

test('Youtube should match Snapshot', () => {
    const component = renderer.create(
        <Youtube query="foo"/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});