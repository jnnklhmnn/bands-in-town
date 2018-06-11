import React from 'react';
import ReactDOM from 'react-dom';
import { writeLastSearch, readLastSearch } from './lastsearch';
require('jest-localstorage-mock');

it('readLastSearch should return false when LocalStorage is not avaliable', () => {
    const result = readLastSearch();
    expect(result).toBe(false);
});


it('readLastSearch should read from LocalStorage when it is availiable', () => {
    const result = readLastSearch();
    expect(localStorage.getItem).toHaveBeenLastCalledWith('bit-latest-search');
});

it('writeLastSearch should write to LocalStorage when it is availiable', () => {
    const result = writeLastSearch('foo');
    expect(localStorage.setItem).toHaveBeenLastCalledWith('bit-latest-search', "[\"foo\"]");
    expect(localStorage.__STORE__['bit-latest-search']).toBe("[\"foo\"]");
});
