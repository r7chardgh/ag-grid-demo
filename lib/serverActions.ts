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