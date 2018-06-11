/**
* writes bit-latest-search properties to localStorage,
* makes sure no more than the last 2 searchqueries are represented in localStorage
* @param searchquery string
*/
export function writeLastSearch(searchquery) {
    if (window.localStorage && searchquery) {
        let lsdata = JSON.parse(localStorage.getItem('bit-latest-search'));
        if (lsdata) {
            lsdata.unshift(searchquery);
            lsdata = lsdata.slice(0, 2);
            localStorage.setItem('bit-latest-search', JSON.stringify(lsdata));
        } else {
            lsdata = [];
            lsdata.unshift(searchquery);
            localStorage.setItem('bit-latest-search', JSON.stringify(lsdata));
        }
    }
}

/**
* reads bit-latest-search properties from localStorage,
* listens to initialload trigger
* returns false when localStorage is not availiable or unset
* returns first value of localStorage array on initialload === true
* returns second value of localStorage array on initialload === false
* @param initialload boolean
* @returns array including localStorage value or false
*/
export function readLastSearch(initialload = false) {

    if (!window.localStorage) {
        return false;
    }
    let lsdata = JSON.parse(localStorage.getItem('bit-latest-search'));
    if (lsdata && initialload === true) {
        return lsdata[0];
    } else if (lsdata && lsdata.length === 2) {
        return lsdata[1];
    } else {
        return false;
    }
    
}