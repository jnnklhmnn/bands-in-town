/**
* modifiesstring to match URL format
* @param query string
* @returns string
*/
export function URLify(query) {
    return query.trim().replace(/\s/g, '%20');
}
