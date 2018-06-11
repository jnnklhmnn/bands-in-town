import React from 'react';
import Events from './Events.js';

import renderer from 'react-test-renderer';

test('Events should match Snapshot', () => {

    const mockinfo = {
        name: 'foo',
        thumb_url: 'http://foo.bar.de'
    }

    const mockevents = [
        {
            "id": "foo",
            "datetime": "2018-08-04T20:00:00",
            "venue": {
                "name": "The Theater at MGM National Harbor",
                "latitude": "38.791707",
                "longitude": "-77.003002",
                "city": "National Harbor",
                "region": "MD",
                "country": "United States"
            }
        },
        {
            "id": "bar",
            "datetime": "2018-08-05T20:00:00",
            "venue": {
                "name": "The Theater at MGM National Harbor",
                "latitude": "38.791707",
                "longitude": "-77.003002",
                "city": "National Harbor",
                "region": "MD",
                "country": "United States"
            }
        }
    ];

    const component = renderer.create(
        <Events info={mockinfo} events={mockevents} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});