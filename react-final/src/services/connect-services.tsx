export function getData(input: RequestInfo, init?: RequestInit | undefined) {
    return fetch(input, Object.assign({
        method: 'get',
        credentials: "include",
        headers :{
            'Access-Control-Allow-Origin': 'https://web-api.coinmarketcap.com',
            'Cookie' :"__cfduid=d3bdf299cc93e29498d5cd108ed8bc01f1591181623",
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
        }
    }, init)).then(response => {
        console.log(response);
        if (response.ok)
            return response.json()
        throw new Error('ACB XYZ')
    });
}