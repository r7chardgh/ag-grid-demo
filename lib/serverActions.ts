'use server'
export async function getDummyUsersByLimit(limit?: number, page?: number) {
    const fetchUrl = `https://dummyjson.com/users`;
    let query = '';
    if (!!limit) {
        query = `?limit=${limit}`
        if (!!page) {
            query += `&skip=${limit * (page - 1)}`
        }
    }

    const response = await fetch(fetchUrl + query, { cache: 'force-cache' });

    if (!response.ok) {
        console.log(response.statusText);

        return null;
    }
    return response.json();
}


//daily monetary stat hkma
export async function getDailyMonetaryStatByLimit(limit?: number, page?: number) {
    const fetchUrl = `https://api.hkma.gov.hk/public/market-data-and-statistics/daily-monetary-statistics/daily-figures-interbank-liquidity`;
    let query = '';
    if (!!limit) {
        query = `?limit=${limit}`
        if (!!page) {
            query += `&skip=${limit * (page - 1)}`
        }
    }

    const response = await fetch(fetchUrl + query, { cache: 'force-cache' });

    if (!response.ok) {
        console.log(response.statusText);

        return null;
    }
    return response.json();
}