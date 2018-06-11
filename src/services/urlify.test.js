import { URLify } from './urlify';

it('should URLify a string', () => {
    expect(URLify('Mr John Smith    ')).toBe('Mr%20John%20Smith');
});
it('should URLify a string with spaces at the beginning', () => {
    expect(URLify('   Hello World    ')).toBe('Hello%20World');
});
it('should URLify a string with extra spaces in the middle', () => {
    expect(URLify('This  string  has      some extra   spaces')).toBe('This%20%20string%20%20has%20%20%20%20%20%20some%20extra%20%20%20spaces');
});