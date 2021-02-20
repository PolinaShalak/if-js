// array dataHomes query
export async function getDataFromAPI(url, options = {}) {
    const results = await fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then((result) => result)
        .catch((error) => console.log(error.message));
    return results;
}

