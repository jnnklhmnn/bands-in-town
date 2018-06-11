const { Map } = require('immutable');

/**
* fetches bands in town api
* returns map including data if successfull
* return error object if not
* @param input string
* @return map including api response/ error object
*/
export function askApi(input) {
    if (!input) {
        return false;
    }

    let fetchOk = (...args) => fetch(...args)
        .then(res => res.ok ? res : res.json().then(data => {
            throw Object.assign(new Error(data.error_message), { name: res.statusText });
        }));
    return Promise.all([
        `https://rest.bandsintown.com/artists/${input}?app_id=exampleid`,
        `https://rest.bandsintown.com/artists/${input}/events?app_id=exampleid`

    ].map(url => fetchOk(url).then(r => r.json()))).then(([d1, d2]) => {
        let data = {};
        data.info = d1;
        data.events = d2;
        
        return Map(data);
    })
        .catch(function (err) {
            return {error: true}
    
        });


}