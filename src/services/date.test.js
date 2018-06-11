import { dateTimeToDate } from './date';

it('should return false when given no input', () => {
    const result = dateTimeToDate();
    expect(result).toBe(false);
});

it('should return array including month and day when given dateTime input', () => {;
    const result = dateTimeToDate('2018-09-16T14:00:00');
    expect(result.length).toBe(2);
    expect(result[0]).toBe('sep');
    expect(result[1]).toBe('16');
});