const formEl = document.getElementById('form');
formEl.addEventListener('submit', async event => {
    event.preventDefault();
    const fetchOptions = {
        method: 'POST',
        body: new FormData(formEl),
    };

    const res = await fetch('https://fe-student-api.herokuapp.com/api/file', fetchOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(result => result)
        .catch(error => console.log(error.message));
    console.log(res);
});
