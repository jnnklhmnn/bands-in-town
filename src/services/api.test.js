import {askApi} from './api';

it('should return Object when given input', () => {
    const result = askApi('foo');
    expect(typeof result).toBe('object');
});

it('should return false when given no input', () => {
    const result = askApi('');
    expect(result).toBe(false);
});